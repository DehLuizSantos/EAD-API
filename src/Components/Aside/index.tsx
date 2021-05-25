import React from 'react'

import Styles from './styles.module.scss'

import Logo from '../../utils/Logo.png'

import {BsFillChatFill} from 'react-icons/bs'

import { Menu } from 'antd';
import {WindowsFilled, SettingFilled} from '@ant-design/icons'




const Aside:React.FC = () =>{

    return(
        <div className={Styles.Container}>
       
            <Menu>

                <div className={Styles.Logo}>
                    <img src={Logo} alt="Logo" />
                </div>
            
                <Menu.Item className={Styles.MenuItem}>  
                    <WindowsFilled />              
                    <span>Painel</span>
                </Menu.Item>

                <Menu.Item className={Styles.MenuItem}>    
                    <SettingFilled />             
                    <span>Configurações</span>
                </Menu.Item>

                <Menu.Item className={Styles.MenuItemSup}>         
                    <BsFillChatFill />           
                    <span>Suport</span>
                </Menu.Item>
                
                
            </Menu>
        </div>
    )
}

export default Aside