import { AppProvider } from "../../context";
import { Header, Footer } from "./index";
import PropTypes from 'prop-types';

const Layout = (props) => {
  const { children, ...restProps } = props

  return (
    <div {...restProps}>
      <AppProvider>
        <Header/>
        {children}
      </AppProvider>
      <Footer/>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;