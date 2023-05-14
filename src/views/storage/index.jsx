import React, { useState, useEffect, useRef } from 'react';
// import { useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";
import * as echarts from 'echarts';
import { soilData } from "./did/soilData";
import { Container } from "reactstrap";
import { Select, Slider, DatePicker, Spin, Input, message, Tabs, Radio, Button } from 'antd';
import { getWorldGeo, getChinaGeo, getSilkRoad } from '../../api/mapGeo'
import { deepClone } from '../../util'
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
const { Search } = Input;
dayjs.extend(customParseFormat);
const { RangePicker } = DatePicker;
let myChart=null
let myLineChart = null

let areaData = {}
const centerData = {}
let silkRoadPointData = [] // 丝绸之路国家数据
let allSumSoc = [] // 总碳储量数据
let allVegetationData = [] // 植被碳库数据
let allSoilData = [] // 植被碳库数据
let dateTimer = null // 底部时间轴定时器
let timer = null
let hasDataYear = [] // 有数据的年份
let maxDataYear = 0
let minDataYear = 0
let cYear = new Date().getFullYear()
cYear = parseInt(cYear/10)
let fieldAllData = [] // 领域数据
const visualMap =  {
  type: 'piecewise',
  showLabel: true,
  splitNumber: '8',
  left: '5%',
  bottom: '10%',
  orient: 'vertical',
  text: ['碳储量（Pg C）'],
  textGap: 10,
  realtime: true,
  calculable: true,
  min: 0,
  max: 100,
  itemGap: 0,
  itemSymbol: 'rect',
  minOpen: true,
  maxOpen: true,
  itemWidth: 32,
  itemHeight: 20,
  textStyle: {
    color: "#5C7DAB",
    fontSize: 14,
    lineHeight: 32,
  },
  inRange: {
    color: [
      "#002590",
      "#127EF1",
      "#4AE2E3",
      "#26E846",
      "#A8F568",
      "#FAE07A",
      "#FF6C27",
      "#BA0340"
    ]
  }
}
let option = {
  visualMap: visualMap
}
const typeOptions = [ 
  { value: 1, key: 1, label: '总碳储量' },
  { value: 2, key: 2, label: '植被碳库' },
  { value: 3, key: 3, label: '土壤碳库' }
]
const dataTypeOpyions = [
  { label: '人均', value: 'avg', disabled: true },
  { label: '总量', value: 'count' }
];
import("./index.scss")
const Storage=() => {
  
    const countryList=[]
    const [messageApi, contextHolder] = message.useMessage();
    // const dispatch=useDispatch()
    const chartmap=useRef(null)
    const lineChart = useRef(null)
    let [nameMap, setNameMap]=useState({})
    let [zhNameMap, setZhNameMap]=useState({})
    let [provinceNameMap, setProvinceNameMap]=useState({})
    let [count, setCount]=useState(0) // 筛选类型
    const [isPlay, setIsPlay] = useState(false);
    const [currentYear, setCurrentYear] = useState(2000) // 当前年份
    const [loaded, setLoaded]=useState(false) // 加载中
    let [type, setType]=useState(1) // 筛选类型
    const [country, setCountry]=useState(undefined) // 筛选国家
    const [countryOptions, setCountryOptions]=useState([])
    let [popCountry, setPopCountry]=useState(undefined) // 弹窗筛选国家
    const [popCountryOptions, setPopCountryOptions]=useState([])
    let [province, setProvice]=useState(undefined) // 筛选省份
    const [provinceOptions, setProviceOptions]=useState([])
    let [popProvince, setPopProvice]=useState(undefined) // 弹窗筛选省份
    const [popProvinceOptions, setPopProviceOptions]=useState([])
    let [city, setCity]=useState(undefined) // 筛选市
    const [cityOptions]=useState([])
    
    let [popCity, setPopCity]=useState(undefined) // 弹窗筛选市
    const [popCityOptions]=useState([])

    let [dataType]=useState('count') // 数据类型 人均，总量

    let [fieldList, setFieldList] = useState([]) // 领域列表

    const [drawerVisible, setDrawerVisible] = useState(false)
    let [activeKey, setActiveKey] = useState(1)
    let [startYear, setStartYear]=useState(dayjs('1970/01/01', 'YYYY')) // 筛选时间段开始时间
    let [endYear, setEndYear]=useState(dayjs(cYear+'0/01/01', 'YYYY')) // 筛选时间段结束时间
    let typeParam = useParams().type
    if (typeParam) {
      typeParam = parseInt(typeParam)
    } else {
      typeParam = 1
    }
    const getSilkRoadData = () => {
      // 丝绸之路经纬度数据
      getSilkRoad().then(response => {
        silkRoadPointData = response.data
      })
    }
    
    useEffect(() => {
      if (count===0) {
        window.scrollTo(0, 0);
        // dispatch(setNavWhite(true));
        getSilkRoadData()
        getGeoData()
        setCount(1)
      }
      setLoaded(false)
      // eslint-disable-next-line react-hooks/exhaustive-deps
      type = typeParam
      setType(typeParam)
      if (typeParam===1) {
        getAllSumSoc()
      } else if (typeParam===2) {
        getVegetationData()
      } else if (typeParam===3) {
        getSoilData()
      }
      const onResize = () => {
        if (myChart) {
          myChart.resize()
        }
      }
      window.addEventListener("resize", onResize);
      return () => {window.removeEventListener("resize", onResize);}
    }, [typeParam]);
    
    const getGeoData = async() => {
      let tempData={}
      await getWorldGeo().then(response => {
        const features=deepClone(response.features)
        features.map((item) => {
          let data={
            name: item.properties.name,
            zhName: item.properties.zhName || item.properties.zhName,
            parent: item.properties.parent || '',
            level: item.properties.level
          }
          centerData[item.properties.name] = item.properties.center
          tempData[item.properties.name]=data
          nameMap[item.properties.name]=item.properties.zhName
          zhNameMap[item.properties.zhName]=item.properties.name
        })
        setNameMap(nameMap)
        setZhNameMap(zhNameMap)
        // if (!loaded) {
        echarts.registerMap('world', response);
        initChart()
        // }
        for (var key in tempData) {
          if (tempData[key].level === 'country' && key) {
            countryList.push({
              label: tempData[key].zhName,
              value: key
            })
          }
        }
        countryList.sort((x, y) => {
          if (x.value < y.value) {
            return -1;
          }
          if (x.value > y.value) {
            return 1;
          }
          return 0;
        })
        if (countryList.length > 0 && countryOptions.length === 0) {
          setCountryOptions(countryList)
          setPopCountryOptions(countryList)
          
        }
      })
      await getChinaGeo().then(response => {
        echarts.registerMap('china', response);
        const features=deepClone(response.features)
        const chinaChild={}
        features.map((item) => {
          let data={
            name: item.properties.name,
            zhName: item.properties.zhName || item.properties.zhName,
            parent: item.properties.parent || '',
            level: item.properties.level
          }
          centerData[item.properties.name] = item.properties.center
          chinaChild[item.properties.shortName] = data
          nameMap[item.properties.shortName] = item.properties.name
          provinceNameMap[item.properties.zhName] = item.properties.shortName
        })
        setNameMap(nameMap)
        setProvinceNameMap(provinceNameMap)
        tempData['China'].child=chinaChild
      })
      areaData = tempData
    }

    const initChart = () => {
      myChart = echarts.init(document.getElementById('map'))
    }
    const chartClick = (params, type) => {
      let value = zhNameMap[params.name]
      if (type === 'world') {
        setCountry(value)
        initProvinceList(value)
        if (params.data&&params.data.key === 'China') {
          setChinaMap(currentYear,{zoom: 1,center: null})
        }
      } else {
        value = provinceNameMap[params.name]
        initProvinceList('China')
        handleChangeProvince(value)
      }
    }
    const setChinaMap = (year, data) => {
      let cuyear = year || currentYear
      const seriesData= []
      let tipFormatter = null
      let seriesName = '总碳储量（Pg C）'
      if (type===1) {
        // 总碳储量
        allSumSoc.map(item => {
          const obj = deepClone(item)
          obj.key = item.name
          obj.name = nameMap[item.name] || item.name
          obj.value = item.sumSoc
          obj.dataType = type
          if (cuyear>=item.year_start&&cuyear<item.year_end) {
            seriesData.push(obj)
          }
          return obj
        })
        tipFormatter = (params, tricket, callbck) => {
          return `<div class="tooltip-pop"><div class="name">${params.name}</div><div class="more-btn iconfont icon-arrow" onclick="window.showInfo('china','${params.name}')"></div><div class="series-name">${params.seriesName}</div></div> <div class="value">${params.value||'--'}</div></div>`
        }
      } else if (type===2) {
        // 植被
        seriesName = '植被碳库'
        tipFormatter = (params, tricket, callbck) => {
          return `<div class="tooltip-pop"><div class="name">${params.name}</div><div class="more-btn iconfont icon-arrow" onclick="window.showInfo('china','${params.name}')"></div><div class="series-name">植被碳密度（g C m ⁻²）</div><div class="value">${(params.data&&params.data.soc_density_amount||'--')}</div><div class="series-name">植被碳储量（Pg C）</div><div class="value">
          ${(params.data&&params.data.soc_stock_amount||'--')}</div></div>`
        }
        allVegetationData.map(item => {
          const obj = deepClone(item)
          obj.key = item.name
          obj.name = nameMap[item.name] || item.name
          obj.value = item.soc_stock_amount
          obj.data = item
          obj.dataType = type
          if (cuyear>=item.year_start&&cuyear<item.year_end) {
            seriesData.push(obj)
          }
          return obj
        })
      } else if (type===3) {
        // 土壤
        seriesName = '土壤碳库'
        tipFormatter = (params, tricket, callbck) => {
          return `<div class="tooltip-pop"><div class="name">${params.name}</div><div class="more-btn iconfont icon-arrow" onclick="window.showInfo('china','${params.name}')"></div><div class="series-name">土壤碳密度（g C m ⁻²）</div><div class="value">${(params.data&&params.data.soc_density_amount||'--')}</div><div class="series-name">土壤碳储量（Pg C）</div><div class="value">
          ${(params.data&&params.data.soc_stock_amount||'--')}</div></div>`
        }
        allSoilData.map(item => {
          const obj = deepClone(item)
          obj.key = item.name
          obj.name = nameMap[item.name] || item.name
          obj.value = item.soc_stock_amount
          obj.data = item
          obj.dataType = type
          if (cuyear>=item.year_start&&cuyear<item.year_end) {
            seriesData.push(obj)
          }
          return obj
        })
      }
      option = {
        visualMap: visualMap,
        center: data?data.center||null : option.center,
        zoom: (data&&data.zoom)?data.zoom : option.zoom,
        
        series: [{
          seriesIndex: 0,
          zoom: (data&&data.zoom)?data.zoom:option.zoom,
          name: seriesName,
          type: 'map',
          map: 'china',
          roam: true,
          nameMap: nameMap,
          emphasis: {
            label: {
              show: true,
              color: '#666'
            },
            itemStyle: {
              areaColor: 'rgba(168, 209, 255, .7)',
              borderColor: 'rgba(42, 130, 228, .7)'
            }
          },
          select: {
            label: {
              show: true,
              color: '#666'
            },
            itemStyle: {
              areaColor: 'rgba(168, 209, 255, 1)',
              borderColor: 'rgba(42, 130, 228, 1)'
            }
          },
          itemStyle: {
            areaColor: 'rgba(238, 244, 252, 1)',
            borderWidth: 0.8,
            borderColor: '#fff'
          },
          data: seriesData
        }],
        tooltip: {
          show: true,
          enterable: true,
          // hideDelay: 3000,
          // alwaysShowContent: true,
          position: function (point, params, dom, rect, size) {
            // 固定在顶部
            return [point[0], point[1]];
          },
          // position: 'inside',
          appendToBody: true,
          formatter: tipFormatter
        }

      };
      if (myChart) {
        myChart.clear()
        myChart.setOption(option)
        myChart.off('click').on('click', (param) => chartClick(param, 'china'));
        myChart.off('georoam').on('georoam', (param) => {
          const _option = myChart.getOption();
          const _zoom = _option.series[0].zoom;
          const _center = _option.series[0].center;
          if (_zoom) {
            option.zoom = _zoom  
          }
          if (_center) {
            option.center = _center
          }
        })
      }
    }

    window.showInfo = (chartType,name) => {
      activeKey = type
      setActiveKey(type)
      getFieldList()
      setDrawerVisible(true)
      if (myChart) {
        myChart.dispatchAction({
          type: 'hideTip'
        })
      }
      if (chartType==='world') {
        popCountry = zhNameMap[name]
        setPopCountry(zhNameMap[name])
        initPopProvinceList(zhNameMap[name])
      } else {
        popCountry = 'China'
        setPopCountry('China')
        initPopProvinceList('China')
        popProvince = provinceNameMap[name]
        setPopProvice(provinceNameMap[name])
      } 
    }

    const setWorldMap = (year, data) => { // 加载世界地图
      let cuyear = year || currentYear
      const seriesData= []
      let tipFormatter = null
      let seriesName = '总碳储量（Pg C）'
      if (type===1) {
        // 总碳储量
        allSumSoc.map(item => {
          const obj = deepClone(item)
          obj.key = item.name
          obj.name = nameMap[item.name] || item.name
          obj.value = item.sumSoc
          obj.dataType = type
          if (cuyear>=item.year_start&&cuyear<item.year_end) {
            seriesData.push(obj)
          }
          return obj
        })
        tipFormatter = (params, tricket, callbck) => {
          return `<div class="tooltip-pop"><div class="name">${params.name}</div><div class="more-btn iconfont icon-arrow" onclick="window.showInfo('world','${params.name}')"></div><div class="series-name">${params.seriesName}</div></div> <div class="value">${params.value||'--'}</div></div>`
        }
      } else if (type===2) {
        // 植被
        seriesName = '植被碳库'
        tipFormatter = (params, tricket, callbck) => {
          return `<div class="tooltip-pop"><div class="name">${params.name}</div><div class="more-btn iconfont icon-arrow" onclick="window.showInfo('world','${params.name}')"></div><div class="series-name">植被碳密度（g C m ⁻²）</div><div class="value">${(params.data&&params.data.soc_density_amount||'--')}</div><div class="series-name">植被碳储量（Pg C）</div><div class="value">
          ${(params.data&&params.data.soc_stock_amount||'--')}</div></div>`
        }
        allVegetationData.map(item => {
          const obj = deepClone(item)
          obj.key = item.name
          obj.name = nameMap[item.name] || item.name
          obj.value = item.soc_stock_amount
          obj.data = item
          obj.dataType = type
          if (cuyear>=item.year_start&&cuyear<item.year_end) {
            seriesData.push(obj)
          }
          return obj
        })
      } else if (type===3) {
        // 土壤
        seriesName = '土壤碳库'
        tipFormatter = (params, tricket, callbck) => {
          return `<div class="tooltip-pop"><div class="name">${params.name}</div><div class="more-btn iconfont icon-arrow" onclick="window.showInfo('world','${params.name}')"></div><div class="series-name">土壤碳密度（g C m ⁻²）</div><div class="value">${(params.data&&params.data.soc_density_amount||'--')}</div><div class="series-name">土壤碳储量（Pg C）</div><div class="value">
          ${(params.data&&params.data.soc_stock_amount||'--')}</div></div>`
        }
        allSoilData.map(item => {
          const obj = deepClone(item)
          obj.key = item.name
          obj.name = nameMap[item.name] || item.name
          obj.value = item.soc_stock_amount
          obj.data = item
          obj.dataType = type
          if (cuyear>=item.year_start&&cuyear<item.year_end) {
            seriesData.push(obj)
          }
          return obj
        })
      }
      let markLineData = []
      
      for (var i = 0; i< silkRoadPointData.length; i++) {
        let item = silkRoadPointData[i]
        let nextItem = silkRoadPointData[i+1]
        let coords = []
        if (i===0) {
          markLineData.push([{name: item.capital, coord: [item.longitude, item.latitude] }, {coord: [item.longitude, item.latitude] }])
        }
        coords.push({coord: [item.longitude, item.latitude] })
        if (nextItem) {
          coords.push({ name: nextItem.capital, coord: [nextItem.longitude, nextItem.latitude] })
        }
        if (coords.length>=2) {
          markLineData.push(coords)
        }
      }
      option = {
        visualMap: visualMap,
        center: data?data.center : option.center,
        zoom: data?(data.zoom||1) : option.zoom,
        series: [{
          seriesIndex: 0,
          zoom:  data?(data.zoom||1) : (option.zoom || 1),
          name: seriesName,
          type: 'map',
          map: 'world',
          roam: true,
          nameMap: nameMap,
          emphasis: {
            label: {
              show: true,
              color: '#666'
            },
            itemStyle: {
              areaColor: 'rgba(168, 209, 255, .7)',
              borderColor: 'rgba(42, 130, 228, .7)'
            }
          },
          select: {
            label: {
              show: true,
              color: '#666'
            },
            itemStyle: {
              areaColor: 'rgba(168, 209, 255, 1)',
              borderColor: 'rgba(42, 130, 228, 1)'
            }
          },
          itemStyle: {
            areaColor: 'rgba(238, 244, 252, 1)',
            borderWidth: 0.8,
            borderColor: '#fff'
          },
          data: seriesData,
          
          markLine: {
            symbol:'circle',
            data: markLineData,
            lineStyle: {
              type: "dashed",
              width: 2,
              // cap: 'round',
              color: '#FF3838',
              shadowColor: 'rgba(255,255, 255, 0.5)',
              // shadowBlur: 10,
              curveness: 1 // 边的曲度，支持从 0 到 1 的值，值越大曲度越大
            },
            labelLayout: {
              hideOverlap: true
            },
            label: {
              // show: false
            },
            silent: true // 不触发鼠标事件
          }
        }
      ],
        tooltip: {
          show: true,
          enterable: true,
          position: function (point, params, dom, rect, size) {
            // 固定在顶部
            return [point[0], point[1]];
          },
          appendToBody: true,
          formatter: tipFormatter
        }
      };
      if (myChart) {
        myChart.clear()
        myChart.setOption(option)
        myChart.off('click').on('click', (param) => chartClick(param, 'world'));
        myChart.off('georoam').on('georoam', (param, e) => {
          const _option = myChart.getOption();
          const _zoom = _option.series[0].zoom;
          const _center = _option.series[0].center;
          if (_zoom) {
            option.zoom = _zoom  
          }
          if (_center) {
            option.center = _center
          }
        })
      }
    }
    const getAllSumSoc = () => {
      // 获取所有总碳储量
      // soilData.getCertain_RegionLevel_Time_SumSoc({Country_and_Region: null},2019).then(response => {
      //   console.log(response)
      // }),
      soilData.getAllSumSoc()
      .then(response => {
      console.log(response, 'soil');
        
        allSumSoc = response
        response.map(item => {
          let year_start = parseInt(item.year_start)
          let year_end = parseInt(item.year_end)
          if (hasDataYear.indexOf(year_start)===-1) {
            hasDataYear.push(year_start)
            if (hasDataYear.indexOf(year_end)===-1) {
              hasDataYear.push(year_end)
            }
          }
        })
        maxDataYear = hasDataYear.sort().reverse()[0]
        minDataYear = hasDataYear.sort()[0]
        setLoaded(true)
        setCurrentYear(minDataYear)
        initTimer(minYear,maxYear)
        setWorldMap()
      })
//       .catch((err)=>{
// console.log(err, 'err');
//       })
    }
    const getVegetationData = () => {
      // 获取植被碳库数据
      soilData.getCertain_Source_Data({Vegetation: null}).then(response => {
        allVegetationData = deepClone(response)
        response.map(item => {
          let year_start = parseInt(item.year_start)
          let year_end = parseInt(item.year_end)
          if (hasDataYear.indexOf(year_start)===-1) {
            hasDataYear.push(year_start)
            if (hasDataYear.indexOf(year_end)===-1) {
              hasDataYear.push(year_end)
            }
          }
        })
        maxDataYear = hasDataYear.sort().reverse()[0]
        minDataYear = hasDataYear.sort()[0]
        setLoaded(true)
        setCurrentYear(minDataYear)
        initTimer(minYear,maxYear)
        setWorldMap()
      })
    }
    const getSoilData = () => {
      // 获取土壤碳库数据
      soilData.getCertain_Source_Data({Soil: null}).then(response => {
        allSoilData = response
        response.map(item => {
          let year_start = parseInt(item.year_start)
          let year_end = parseInt(item.year_end)
          if (hasDataYear.indexOf(year_start)===-1) {
            hasDataYear.push(year_start)
            if (hasDataYear.indexOf(year_end)===-1) {
              hasDataYear.push(year_end)
            }
          }
        })
        maxDataYear = hasDataYear.sort().reverse()[0]
        minDataYear = hasDataYear.sort()[0]
        setLoaded(true)
        setCurrentYear(minDataYear)
        initTimer(minYear,maxYear)
      
        setWorldMap()
      })
    }
    const selectCountry = (name) =>{
      if (name!=='China') {
        province = undefined
        setProvice(undefined)
      }
      if (name === 'China'&&province) {
        // 中国
        setChinaMap(currentYear, {zoom: 3, center: centerData[name]})
      } else {
        if (centerData[name]) {
          setWorldMap(currentYear, {zoom: 3, center: centerData[name]})
        } else {
          setWorldMap(currentYear, {zoom: 1, center: null })
        }       
      }
      const zhName = nameMap[name]||name
      if (myChart) {
        myChart.dispatchAction({
          type: 'select',
          seriesIndex: 0,
          name: zhName
        })
      }
      
    }
    const selectProvice = (name) =>{
      if (name) {
        setChinaMap(currentYear)
      } else {
        setWorldMap(currentYear, {zoom: 1, center: null })
      }
      const zhName = nameMap[name]||name
      if (myChart) {
        myChart.dispatchAction({
          type: 'unselect',
          seriesIndex: 0,
        })
        myChart.dispatchAction({
          type: 'select',
          seriesIndex: 0,
          name: zhName
        })
      }
   
    }
    const selectCity = (name) =>{
      // if (name) {
      //   setChinaMap(currentYear, {zoom: 3, center: centerData[name]})
      // } else {
      //   setWorldMap(currentYear, {zoom: 1, center: null })
      // }
      const zhName = nameMap[name]||name
      myChart.dispatchAction({
        type: 'unselect',
        seriesIndex: 0,
      })
      myChart.dispatchAction({
        type: 'select',
        seriesIndex: 0,
        name: zhName
      })
    }
    
    const handleChangeType=(value) => {
      type = value
      setType(value)
      setLoaded(false)
      console.log(type)
      if (type===1) {
        getAllSumSoc()
      } else if (type===2) {
        getVegetationData()
      } else if (type===3) {
        getSoilData()
      }
    };
    
    
    const onSearch = (value) => {
      // 搜索国家或地区
      if (zhNameMap[value]) {
        handleChangeCountry(zhNameMap[value])
      } else if(nameMap[value]) {
        handleChangeCountry(value)
      } else {
        messageApi.open({
          type: 'warning',
          style: {
            marginTop: '200px',
          },
          content: '未搜索到该国家！',
        });
      }
    }
    const initProvinceList = (value) => {
      let provinceList=[]
      if (value && areaData[value]) {
        if (areaData[value].child) {
          const child=areaData[value].child
          for (var key in child) {
            if (key) {
              provinceList.push({
                label: child[key].zhName,
                value: key
              })
            }
          }
        }
      }
      setProviceOptions(provinceList)
    }
    const handleChangeCountry=(value) => {
      setCountry(value)
      initProvinceList(value)
      selectCountry(value)
    }
   
    const initPopProvinceList = (value) => {
      let provinceList=[]
      if (value && areaData[value]) {
        if (areaData[value].child) {
          const child=areaData[value].child
          for (var key in child) {
            if (key) {
              provinceList.push({
                label: child[key].zhName,
                value: key
              })
            }
          }
        }
      }
      setPopProviceOptions(provinceList)
    }
    const handleChangeProvince=(value) => {
      province = value
      setProvice(value)
      selectProvice(value)     
    }
    const handleChangePopCountry=(value) => {
      popCountry = value
      setPopCountry(value)
      initPopProvinceList(value)
      initLineChart()
    }
    const handleChangePopProvince = (value) => {
      popProvince = value
      setPopProvice(value) 
      initLineChart()
    }
    const handleChangePopCity=(value) => {
      popCity = value
      setPopCity(value)
      initLineChart()
    }
    const handleChangeCity=(value) => {
      city = value
      setCity(value)
      selectCity(value)     
    }
    
    
    const filterOption=(inputValue, option) => {
      if (inputValue) {
        const label=String(option.label).toLowerCase()
        const value=String(option.value).toLowerCase()
        const input=inputValue.toLowerCase()
        if (label.includes(input) || value.includes(input)) {
          return true
        }
        return false
      } else {
        return true
      }
    }
    const handleChangeYear = (value) => {
      let newValue = value>maxDataYear?maxDataYear:value<minDataYear?minDataYear: value
      setCurrentYear(newValue)
      if (!province) {
        // 总碳储量
        clearTimeout(timer)
        timer = setTimeout(()=>{
          setWorldMap(newValue)
        },500)
      } else {
        clearTimeout(timer)
        timer = setTimeout(()=>{
          setChinaMap(newValue)
        },500)
      }
    }
    const [marks, setMarks] = useState([])
    const [minYear, setMinYear] = useState(1970)
    const [maxYear, setMaxYear] = useState(2060)
    const initTimer = (min, max) => {
      const tempMarks = {}
      for(var i=min;i<=max;i=i+10) {
        tempMarks[i] = {
          label: <span style={{color: (i< minDataYear || i> maxDataYear)?'rgba(51, 51, 51, .25)':'#333'}}>{i}</span>,
        }
      }
      setMarks(tempMarks)
    }
    const handlePlay = () => {
      setIsPlay(!isPlay)
      start()
    }
    const start = () => {
      let newYear = currentYear
      if (currentYear<maxDataYear) {
        newYear = currentYear+1
      } else {
        newYear = minDataYear
      }
      handleChangeYear(newYear)
    }
    const playTime = () => {
      clearTimeout(dateTimer)
      dateTimer = setTimeout(() => {
        start()
      }, 1000);
    }
    const pauseTime = () => {
      clearTimeout(dateTimer)
    }
    if (isPlay) {
      playTime()
    } else {
      pauseTime() 
    }
    const [rangeYear, setRangeYear] = useState([dayjs('1970/01/01', 'YYYY'), dayjs('2060/01/01', 'YYYY')]);
    const onChangeYear = (value) => {
      setMinYear(value[0].$y)
      setMaxYear(value[1].$y)
      setRangeYear(value)
      initTimer(value[0].$y, value[1].$y)
    }
    const onTabClick = (key) => {
      // 弹窗Tab切换
      activeKey = key
      setActiveKey(key)
      getFieldList()
    }
    const initLineChart = () => {
      if (!myLineChart) {
        if (document.getElementById("line_chart")) {
          myLineChart = echarts.init(document.getElementById("line_chart"))
        }
      }
      setLineChartOptions()
    }
    const setLineChartOptions = () => {
      let legend = []
      let seriesData = []
      let xAxisData = []
      let allData = []
      let start = startYear.$y
      let end = endYear.$y
      let colorArr = ['#2A82E4', '#29D3E3', '#29E389', '#FAD728']
      if (!popProvince) {
        // 没有选择省份
        allData = fieldAllData.filter(item => item.name === popCountry)
      } else {
        allData= fieldAllData.filter(item => item.name === popProvince)
      }
      start = parseInt(start/10)*10 
      if (end%10>0) {
        end = (parseInt(end/10)+1) *10 
      }
      for(let i=start; i<=end; i = i+10) {
        xAxisData.push({value: i+''})  
      }
      for (let i=0;i<fieldList.length;i++) {
        let item = fieldList[i]
        if (item.active) {
          legend.push(item.label)
          let data = []
          for(let j = 0; j< allData.length; j++ ) {
            let d = allData[j]
            let year_start = parseInt(d.year_start)
            if (year_start>=start&&year_start<=end) {
              if (activeKey===1) {
                data.push([year_start+'', d.fieldReserves[i][1]])
              } else {
                data.push([year_start+'', d.fieldReserves[i].soc_stock_amount])
              }
            }
          }
          data.sort((a,b)=>{return a[0]-b[0]})
          if (data.length===0) {
            data = xAxisData.map(item=>0)
          }
          seriesData.push({
            name: item.label,
            type: 'line',
            // stack: 'Total',
            areaStyle: {
              opacity:.5
            },
            itemStyle: {color: colorArr[i%colorArr.length]},
            emphasis: {
              focus: 'series'
            },
            data: data
          })
        }  
      }
      const lineOptions = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            // type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        legend: {
          data: legend
        },
        // toolbox: {
        //   feature: {
        //     saveAsImage: {}
        //   }
        // },
        grid: {
          left: 20,
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: { 
          boundaryGap: false,
          data: xAxisData
        },
        yAxis: {
          name: '碳储量（Pg C）',
          nameTextStyle: {
            color: '#999',
            fontSize: 12,
            align: 'center'
          },
          type: 'value'
        },
        series: seriesData
      }
      if (myLineChart) {
        myLineChart.clear()
        myLineChart.setOption(lineOptions)
      }
     
    }
    const closeDrawer = () => {
      setDrawerVisible(false)
      if(myLineChart) {
        myLineChart.dispose()
        myLineChart = null
        popCountry = undefined
        popProvince = undefined
        popCity=undefined
        setPopCountry(popCountry)
        setPopProvice(popProvince)
        setPopCity(popCity)
      }
    }
    const getFieldList = () => {
      // 获取领域数据
      if (activeKey===1) {
        // 总碳储量
        soilData.getAllSumFieldData().then(response => {
          const list = []
          if (response[0]&&response[0].fieldReserves) {
            response[0].fieldReserves.map(item => {
              list.push({label:item[0], active: true})
            })
          }
          fieldAllData = response
          fieldList = list
          setFieldList(list)
          initLineChart()
        })
      } else {
        let param = {Vegetation: null}
        if (activeKey === 2) {
          param = {
            Soil: null
          }
        }
        soilData.getAllFieldData(param).then(response => {
          const list = []
          fieldAllData = response
          if (response[0]&&response[0].fieldReserves) {
            response[0].fieldReserves.map(item => {
              list.push({label:item.fieldName, active: true})
            })
          }
          fieldList = list
          setFieldList(list)
          initLineChart()
        })
      }
     
    }
    const onDataTypeChange = () => {
      initLineChart()
    }
    const handleConfirm = () => {
      initLineChart()
    }
    const changeField = (index) => {
      const list = deepClone(fieldList)
      list[index].active = !list[index].active
      fieldList = list
      setFieldList(list)
      initLineChart()
    }
    const onChangeStartYear = (value) => {
      setStartYear(value)
    }
    const onChangeEndYear = (value) => {
      setEndYear(value)
    }
    return ( 
    <Spin spinning={!loaded} delay={100}>
      {contextHolder}
      <div className="map-page">
        <Container >
          <div className='action-box'>
            <div className='page-title font-18'>生态碳汇</div> 
            <div className='search-bar'>
            <div className='select-item type-select'>
              <Select
                value={ type }
                onChange={ handleChangeType }
                options={typeOptions}
                suffixIcon={<div className='iconfont icon-xiala'></div>}
              ></Select>
            </div>
            <div className='select-box'>
            <div className='select-item' >
              <Select
                value={ country }
                loading={ countryOptions.length === 0 }
                virtual={ false }
                allowClear={ true }
                showSearch placeholder="请选择国家"
                filterOption={ filterOption }
                onChange={ handleChangeCountry }
                options={ countryOptions }
                suffixIcon={<div className='iconfont icon-xiala'></div>}
              ></Select>
            </div> 
            <div className='select-item' >
              <Select 
                value={ province }
                virtual={ false }
                allowClear={ true }
                disabled={provinceOptions.length<=0}
                showSearch
                placeholder="请选择省份"
                filterOption={ filterOption }
                onChange={ handleChangeProvince }
                options={ provinceOptions }
                suffixIcon={<div className='iconfont icon-xiala'></div>}>
              </Select> 
            </div>
            <div className='select-item' >
              <Select 
                value={ city }
                virtual={ false }
                allowClear={ true }
                disabled={cityOptions.length<=0}
                showSearch
                placeholder="请选择市"
                filterOption={ filterOption }
                onChange={ handleChangeCity }
                options={ cityOptions }
                suffixIcon={<div className='iconfont icon-xiala'></div>}>
              </Select> 
            </div>
            </div>
           
            <div className='search-input'>
              <Search placeholder="搜索国家或地区" bordered={false} allowClear onSearch={onSearch} />
            </div>
              
            </div>
          </div>
        </Container>
        <div className='map-box'>
          <div id="map" ref={ chartmap } className='map' width="100%" height="100%"></div>
        </div>
       
        <div className='timeline'>
          <div className='play-btn' onClick={handlePlay}> <i className={!isPlay?'iconfont icon-play':'iconfont icon-pause'}></i> </div>
          <Slider min={minYear} max={maxYear} value={currentYear} marks={marks} onChange={handleChangeYear} tooltip={{ open: true }}/>
          <div className='year-range-picker'>
            <RangePicker 
            picker="year" 
            placement="topLeft" 
            allowClear={false}
            onChange={onChangeYear}
            value={rangeYear}
            format="YYYY" />
          </div>
        </div>
        {
        drawerVisible&&<div className='drawer'>
          <div className='drawer-mask'></div>
          <div className='drawer-content fadeInRight animated faster'>
            <div className='drawer-wrapper-body'> 
              <div className='drawer-head'>
                <Tabs defaultActiveKey="1" activeKey={activeKey} items={typeOptions} onTabClick={onTabClick}> </Tabs>
                <div className='drawer-close iconfont icon-close_circle' onClick={closeDrawer}></div>
              </div>
              <div className='drawer-main'>
                <div className='item-label'>国家/地区</div>
                <div className='filter-area-box'>
                  <div className='select-item' >
                    <Select
                      value={ popCountry }
                      loading={ popCountryOptions.length === 0 }
                      virtual={ false }
                      allowClear={ false }
                      getPopupContainer={triggerNode => triggerNode.parentNode}
                      showSearch placeholder="请选择国家"
                      filterOption={ filterOption }
                      onChange={ handleChangePopCountry }
                      options={ popCountryOptions }
                      suffixIcon={<div className='iconfont icon-xiala'></div>}
                    ></Select>
                  </div> 
                  <div className='select-item select-province' >
                    <Select 
                      value={ popProvince }
                      virtual={ false }
                      allowClear={ true }
                      disabled={popProvinceOptions.length<=0}
                      getPopupContainer={triggerNode => triggerNode.parentNode}
                      showSearch
                      placeholder="请选择省份"
                      filterOption={ filterOption }
                      onChange={ handleChangePopProvince }
                      options={ popProvinceOptions }
                      suffixIcon={<div className='iconfont icon-xiala'></div>}>
                    </Select> 
                  </div>
                  <div className='select-item select-city' >
                    <Select 
                      value={ popCity }
                      virtual={ false }
                      allowClear={ true }
                      disabled={popCityOptions.length<=0}
                      getPopupContainer={triggerNode => triggerNode.parentNode}
                      showSearch
                      placeholder="请选择市"
                      filterOption={ filterOption }
                      onChange={ handleChangePopCity }
                      options={ popCityOptions }
                      suffixIcon={<div className='iconfont icon-xiala'></div>}
                    ></Select> 
                  </div>
                </div>
                <div className='radio-box'>
                  <Radio.Group options={dataTypeOpyions} onChange={onDataTypeChange} value={dataType} />
                </div>
                <div className='item-label'>涉及领域</div>
                <div className='field-list'>
                  {
                    fieldList.map((item, index)=>{
                      return (<div key={index} className={item.active?'field-item active':'field-item'} onClick={()=>{changeField(index)}}>{item.label}</div>)
                    })
                  } 
                </div>
                <div className='item-label'>选择时间段（逐年）</div>
                <div className='date-box'>
                  <DatePicker onChange={onChangeStartYear} allowClear={false} value={startYear} picker="year" getPopupContainer={triggerNode => triggerNode.parentNode}/>
                  <span className='to'>至</span>
                  <DatePicker onChange={onChangeEndYear} allowClear={false} value={endYear} picker="year" getPopupContainer={triggerNode => triggerNode.parentNode}/>
                  <Button onClick={handleConfirm} type="primary">确定</Button>
                </div>
                <div className='line-chart-box'>
                  <div className='chart-title'>{activeKey===1?'总碳储量':activeKey===2?'植被碳库':'土壤碳库'}</div>
               
                  <div id="line_chart" ref={ lineChart } className='line-chart'></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        }
      </div>
    </Spin>
  )
}
export default Storage;