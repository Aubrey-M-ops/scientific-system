export const idlFactory = ({ IDL }) => {
    const DataSource__1 = IDL.Variant({
      'Soil' : IDL.Null,
      'Vegetation' : IDL.Null,
    });
    const FieldReserve = IDL.Record({
      'soc_stock_amount' : IDL.Text,
      'std_amount' : IDL.Text,
      'soc_density_amount' : IDL.Text,
      'fieldName' : IDL.Text,
    });
    const RegionLevel = IDL.Variant({
      'City' : IDL.Null,
      'Country_and_Region' : IDL.Null,
      'Province' : IDL.Null,
    });
    const RESERVESContainField = IDL.Record({
      'id' : IDL.Nat,
      'year_end' : IDL.Nat,
      'upload_count' : IDL.Nat,
      'fieldReserves' : IDL.Vec(FieldReserve),
      'name' : IDL.Text,
      'regionLevel' : RegionLevel,
      'year_start' : IDL.Nat,
    });
    const SumRESERVESContainField = IDL.Record({
      'id' : IDL.Nat,
      'year_end' : IDL.Nat,
      'upload_count' : IDL.Nat,
      'fieldReserves' : IDL.Vec(IDL.Tuple(IDL.Text, IDL.Text)),
      'name' : IDL.Text,
      'regionLevel' : RegionLevel,
      'year_start' : IDL.Nat,
    });
    const SumRESERVES = IDL.Record({
      'id' : IDL.Nat,
      'year_end' : IDL.Nat,
      'upload_count' : IDL.Nat,
      'name' : IDL.Text,
      'regionLevel' : RegionLevel,
      'sumSoc' : IDL.Text,
      'year_start' : IDL.Nat,
    });
    const FieldReserve__1 = IDL.Record({
      'soc_stock_amount' : IDL.Text,
      'std_amount' : IDL.Text,
      'soc_density_amount' : IDL.Text,
      'fieldName' : IDL.Text,
    });
    const RESERVES = IDL.Record({
      'id' : IDL.Nat,
      'year_end' : IDL.Nat,
      'upload_count' : IDL.Nat,
      'name' : IDL.Text,
      'soc_stock_amount' : IDL.Text,
      'std_amount' : IDL.Text,
      'regionLevel' : RegionLevel,
      'year_start' : IDL.Nat,
      'soc_density_amount' : IDL.Text,
    });
    const RegionLevel__1 = IDL.Variant({
      'City' : IDL.Null,
      'Country_and_Region' : IDL.Null,
      'Province' : IDL.Null,
    });
    const DataSource = IDL.Variant({
      'Soil' : IDL.Null,
      'Vegetation' : IDL.Null,
    });
    const UploadFieldArgs = IDL.Record({
      'id' : IDL.Nat,
      'year_end' : IDL.Nat,
      'dataSource' : DataSource,
      'upload_count' : IDL.Nat,
      'fieldReserves' : IDL.Vec(FieldReserve),
      'name' : IDL.Text,
      'regionLevel' : RegionLevel,
      'year_start' : IDL.Nat,
    });
    const Error = IDL.Variant({
      'AlreadyHaveThisReserve' : IDL.Null,
      'TimeError' : IDL.Null,
      'SomeThingWrong' : IDL.Null,
      'ReserveNotExist' : IDL.Null,
    });
    const Result = IDL.Variant({ 'ok' : IDL.Bool, 'err' : Error });
    const data = IDL.Service({
      'getAllAverageFieldData' : IDL.Func(
          [DataSource__1],
          [IDL.Vec(RESERVESContainField)],
          ['query'],
        ),
      'getAllAverageSumFieldData' : IDL.Func(
          [],
          [IDL.Vec(SumRESERVESContainField)],
          ['query'],
        ),
      'getAllFieldData' : IDL.Func(
          [DataSource__1],
          [IDL.Vec(RESERVESContainField)],
          ['query'],
        ),
      'getAllSumFieldData' : IDL.Func(
          [],
          [IDL.Vec(SumRESERVESContainField)],
          ['query'],
        ),
      'getAllSumSoc' : IDL.Func([], [IDL.Vec(SumRESERVES)], ['query']),
      'getAverageFieldData' : IDL.Func(
          [DataSource__1, IDL.Nat, IDL.Nat],
          [IDL.Opt(RESERVESContainField)],
          ['query'],
        ),
      'getCertainFieldAverageData' : IDL.Func(
          [DataSource__1, IDL.Nat, IDL.Nat, IDL.Text],
          [IDL.Opt(FieldReserve__1)],
          ['query'],
        ),
      'getCertainFieldData' : IDL.Func(
          [DataSource__1, IDL.Nat, IDL.Nat, IDL.Text],
          [IDL.Opt(FieldReserve__1)],
          ['query'],
        ),
      'getCertain_Id_Time_Data' : IDL.Func(
          [DataSource__1, IDL.Nat, IDL.Nat],
          [IDL.Opt(RESERVES)],
          ['query'],
        ),
      'getCertain_Id_Time_Field_sumAvergaeData' : IDL.Func(
          [IDL.Nat, IDL.Nat, IDL.Text],
          [IDL.Opt(IDL.Text)],
          ['query'],
        ),
      'getCertain_Id_Time_Field_sumData' : IDL.Func(
          [IDL.Nat, IDL.Nat, IDL.Text],
          [IDL.Opt(IDL.Text)],
          ['query'],
        ),
      'getCertain_Id_Time_SumSoc' : IDL.Func(
          [IDL.Nat, IDL.Nat],
          [IDL.Opt(SumRESERVES)],
          ['query'],
        ),
      'getCertain_Id_Time_sumAverageFieldData' : IDL.Func(
          [IDL.Nat, IDL.Nat],
          [IDL.Opt(SumRESERVESContainField)],
          ['query'],
        ),
      'getCertain_Id_Time_sumFieldData' : IDL.Func(
          [IDL.Nat, IDL.Nat],
          [IDL.Opt(SumRESERVESContainField)],
          ['query'],
        ),
      'getCertain_RegionLevel_AverageFieldData' : IDL.Func(
          [DataSource__1, RegionLevel__1],
          [IDL.Vec(RESERVESContainField)],
          ['query'],
        ),
      'getCertain_RegionLevel_FieldData' : IDL.Func(
          [DataSource__1, RegionLevel__1],
          [IDL.Vec(RESERVESContainField)],
          ['query'],
        ),
      'getCertain_RegionLevel_SumSoc' : IDL.Func(
          [RegionLevel__1],
          [IDL.Vec(SumRESERVES)],
          ['query'],
        ),
      'getCertain_RegionLevel_Time_AverageFieldData' : IDL.Func(
          [DataSource__1, RegionLevel__1, IDL.Nat],
          [IDL.Vec(RESERVESContainField)],
          ['query'],
        ),
      'getCertain_RegionLevel_Time_Data' : IDL.Func(
          [DataSource__1, RegionLevel__1, IDL.Nat],
          [IDL.Vec(RESERVES)],
          ['query'],
        ),
      'getCertain_RegionLevel_Time_FieldData' : IDL.Func(
          [DataSource__1, RegionLevel__1, IDL.Nat],
          [IDL.Vec(RESERVESContainField)],
          ['query'],
        ),
      'getCertain_RegionLevel_Time_SumSoc' : IDL.Func(
          [RegionLevel__1, IDL.Nat],
          [IDL.Vec(SumRESERVES)],
          ['query'],
        ),
      'getCertain_RegionLevel_Time_sumAverageFieldData' : IDL.Func(
          [RegionLevel__1, IDL.Nat],
          [IDL.Vec(SumRESERVESContainField)],
          ['query'],
        ),
      'getCertain_RegionLevel_Time_sumFieldData' : IDL.Func(
          [RegionLevel__1, IDL.Nat],
          [IDL.Vec(SumRESERVESContainField)],
          ['query'],
        ),
      'getCertain_RegionLevel_sumAverageFiledData' : IDL.Func(
          [RegionLevel__1],
          [IDL.Vec(SumRESERVESContainField)],
          ['query'],
        ),
      'getCertain_RegionLevel_sumFiledData' : IDL.Func(
          [RegionLevel__1],
          [IDL.Vec(SumRESERVESContainField)],
          ['query'],
        ),
      'getCertain_Source_Data' : IDL.Func(
          [DataSource__1],
          [IDL.Vec(RESERVES)],
          ['query'],
        ),
      'getCertanin_RegionLevel_Data' : IDL.Func(
          [DataSource__1, RegionLevel__1],
          [IDL.Vec(RESERVES)],
          ['query'],
        ),
      'getFieldData' : IDL.Func(
          [DataSource__1, IDL.Nat, IDL.Nat],
          [IDL.Opt(RESERVESContainField)],
          ['query'],
        ),
      'getIdToNameMap' : IDL.Func(
          [],
          [IDL.Vec(IDL.Tuple(IDL.Nat, IDL.Text))],
          ['query'],
        ),
      'getNameToIdMap' : IDL.Func(
          [],
          [IDL.Vec(IDL.Tuple(IDL.Text, IDL.Nat))],
          ['query'],
        ),
      'idToName' : IDL.Func([IDL.Nat], [IDL.Opt(IDL.Text)], ['query']),
      'nameToId' : IDL.Func([IDL.Text], [IDL.Opt(IDL.Nat)], ['query']),
      'newNameId' : IDL.Func([IDL.Text], [IDL.Nat], []),
      'uploadAverageFieldData' : IDL.Func([UploadFieldArgs], [Result], []),
      'uploadFieldData' : IDL.Func([UploadFieldArgs], [Result], []),
      'uploadSoilData' : IDL.Func([RESERVES], [Result], []),
      'uploadSumAvergaeFieldData' : IDL.Func(
          [SumRESERVESContainField],
          [Result],
          [],
        ),
      'uploadSumData' : IDL.Func([SumRESERVES], [Result], []),
      'uploadSumFieldData' : IDL.Func([SumRESERVESContainField], [Result], []),
      'uploadVegetationData' : IDL.Func([RESERVES], [Result], []),
    });
    return data;
  };
  export const init = ({ IDL }) => { return []; };
  