import { Layout, Menu } from 'antd';

import Aside from '../Aside';
import MainHeader from '../MainHeader'
import MainContent from '../Dashboard'

import Styles from './styles.module.scss'



const { Header, Content, Sider } = Layout;




const Sidebar :React.FC = () => {

  
    return (
      <Layout>
        <Sider className={Styles.Sider}>                 
          
            <Aside />
          
        </Sider>

        <Layout className={Styles.LayoutRight}>

          <Header className={Styles.Header}>

              <MainHeader /> 

          </Header>


          <Content className={Styles.Content}>              

            <MainContent />
              
          </Content>

        </Layout>
      </Layout>
    );
  }


export default Sidebar