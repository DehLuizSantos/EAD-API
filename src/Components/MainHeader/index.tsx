import React, {useRef} from 'react'

import Styles from './styles.module.scss'

import { Input, Badge, Menu, Dropdown, Avatar } from 'antd'

import {BellOutlined, SearchOutlined, DownOutlined} from '@ant-design/icons'
import { useUser } from '../../hooks/user';


const menu = (
  <Menu className={Styles.menuBadge}>
    <Menu.Item key="0">
        <a href="#">Painel</a>
    </Menu.Item>
    <Menu.Item key="1">
        <a href="#">Configurações</a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3">Suport</Menu.Item>
  </Menu>
);



const MainHeader:React.FC = () =>{
    const {
      userList,
      setQuery,
    } = useUser()

    return(
        <div className={Styles.Container}>
            <Input
                prefix={<SearchOutlined />}
                placeholder="Busque por clientes"
                className={Styles.Input}
                onChange={(e)=>setQuery(e.target.value)}
            />
            <Badge dot className={Styles.Badge}>
                <BellOutlined className={Styles.BadgeBell} />
            </Badge>

            <Avatar src='https://desafio.eadplataforma.com/front/assets/ronaldo.jpg' 
              className={Styles.Ball} />              
            
         

            <Dropdown overlay={menu} trigger={['click']}>
                <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>                   
                    <DownOutlined className={Styles.BadgeDown} />
                </a>
            </Dropdown>
            

        </div>
    )
}

export default MainHeader