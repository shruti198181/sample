// import { useLocation } from 'react-router-dom';
// const withLayout = (WrappedComponent) => {
//   // const { hideOnPaths = [] } = options;

//   const Layout = (props) => {
//     // const location = useLocation();
//     // const shouldHideLayout = hideOnPaths.includes(location.pathname);

//     return (
//       <>
//         <Mynavbar />

//         <div style={{ width: '100%', margin: 'auto' }}>
//           <WrappedComponent {...props} />
//         </div>

//         <Footer />
//       </>
//     );
//   };

//   return Layout;
// };

import Mynavbar from './navbar';
import Footer from './footer';


// export default withLayout;
const withLayout = (WrappedComponent) => {
  return function LayoutWrapper(props) {
    return (
      <>
        <Mynavbar />
        <div style={{ width: '100%', margin: 'auto' }}>
          <WrappedComponent {...props} />
        </div>
        <Footer />
      </>
    );
  };
};
export default withLayout;