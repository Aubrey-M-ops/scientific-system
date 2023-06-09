import { NAV_MENU } from "../../constant/nav";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

export default function TopNavbar() {
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const [collapseOut, setCollapseOut] = React.useState("");
  const [color, setColor] = React.useState("navbar-transparent");
  const history = useHistory();

  useEffect(() => {
    window.addEventListener("scroll", changeColor);
    return function cleanup() {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);
  const changeColor = () => {
    if (
      document.documentElement.scrollTop > 99 ||
      document.body.scrollTop > 99
    ) {
      setColor("bg-info");
    } else if (
      document.documentElement.scrollTop < 100 ||
      document.body.scrollTop < 100
    ) {
      setColor("navbar-transparent");
    }
  };
  const toggleCollapse = () => {
    document.documentElement.classList.toggle("nav-open");
    setCollapseOpen(!collapseOpen);
  };
  const onCollapseExiting = () => {
    setCollapseOut("collapsing-out");
  };
  const onCollapseExited = () => {
    setCollapseOut("");
  };
  const scrollToDownload = () => {
    document
      .getElementById("download-section")
      .scrollIntoView({ behavior: "smooth" });
  };
  return (
    <Navbar className={"fixed-top " + color} color-on-scroll="100" expand="lg">
      <Container>
        <div className="navbar-translate">
          <NavbarBrand to="/" tag={Link} id="navbar-brand">
            <span>丝路碳库 · </span>
            非二氧化碳交易平台
          </NavbarBrand>
        </div>
        <Collapse
          className={"justify-content-end " + collapseOut}
          navbar
          isOpen={collapseOpen}
          onExiting={onCollapseExiting}
          onExited={onCollapseExited}
        >
          <Nav navbar>
            {/* <NavItem className="p-0">
              <NavLink
                data-placement="bottom"
                href="https://www.instagram.com/CreativeTimOfficial"
                rel="noopener noreferrer"
                target="_blank"
                title="Follow us on Instagram"
              >
                <i className="fab fa-instagram" />
                <p className="d-lg-none d-xl-none">Instagram</p>
              </NavLink>
            </NavItem> */}
            <NavItem>
              <NavLink href="/home" rel="noopener noreferrer">
                {/* <i className="fab fa-instagram" /> */}
                <p>首页</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/dynamic" rel="noopener noreferrer">
                {/* <i className="fab fa-instagram" /> */}
                <p>丝路科考动态</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/storage" rel="noopener noreferrer">
                {/* <i className="fab fa-instagram" /> */}
                <p>丝路碳储量</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/scienceResult" rel="noopener noreferrer">
                {/* <i className="fab fa-instagram" /> */}
                <p>科研成果</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/teamWork" rel="noopener noreferrer">
                {/* <i className="fab fa-instagram" /> */}
                <p>科研团队与平台</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/aboutUs" rel="noopener noreferrer">
                {/* <i className="fab fa-instagram" /> */}
                <p>关于我们</p>
              </NavLink>
            </NavItem>

            {/* <NavItem>
              <Button
                className="nav-link d-none d-lg-block"
                color="primary"
                target="_blank"
                href="https://www.creative-tim.com/product/blk-design-system-pro-react?ref=bdsr-user-archive-index-navbar-upgrade-pro"
              >
                <i className="tim-icons icon-spaceship" /> Upgrade to PRO
              </Button>
            </NavItem>
            <NavItem>
              <Button
                className="nav-link d-none d-lg-block"
                color="default"
                onClick={scrollToDownload}
              >
                <i className="tim-icons icon-cloud-download-93" /> Download
              </Button>
            </NavItem> */}
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}
