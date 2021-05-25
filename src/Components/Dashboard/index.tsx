import React from 'react'
import Styles from './styles.module.scss'

import { Card, Table, Avatar, Row, Col }  from 'antd'
import { useUser } from '../../hooks/user'
import {LoadingOutlined} from '@ant-design/icons'





const MainContent:React.FC = () =>{
  const {
    userList,
  } = useUser()
  const columns = [

      {      

        dataIndex: 'photo_url',
        key: 'phot_url',
        render: (photo_url:string) => <Avatar src={photo_url}></Avatar>
      },
      {      
        dataIndex: 'name',
        key: 'name',
        
      },
      {      
        dataIndex: 'email',
        key: 'email'
      },
      {
        dataIndex: 'phone',
        key: 'phone',
      },
      {
          
          dataIndex: 'amount',
          key: 'amount',
          render: (amount:number)=> <>{`R$ ${amount}`}</>
      },
      {
          dataIndex: 'status',
          key: 'status',
          render: (status:number)=>(
           <h4>{status===1 ? 'Inadiplente':'Adiplente'}</h4>
          )
      },
    ];

   
    
    const total:number = userList.search.map((element)=> {
        let result = 0
        result+=element.amount

        return result
    }).reduce((accumulator, current)=>accumulator+current)


    const inadimplentes:number[] = userList?.search.map(userList => userList.status)

    const numInad = inadimplentes.reduce((accumulator, current)=>accumulator+current)

    const adimplentes:number = inadimplentes.length - numInad
  

  return(

            
        <Col span={24}  className={Styles.Container}>

            <Row>
                <div className={Styles.Titulo}>
                    <h2>Visão geral</h2>
                </div>
            </Row>

            <Row justify="center">

                <Col  className={Styles.Cards}>
                    <Card bordered={true} className={Styles.Card} style={{ width: 300 }}>
                        <h3>Total de clientes</h3>
                        <p>{userList.total}</p>
                    
                    </Card>

                    <Card bordered={true} className={Styles.Card} style={{ width: 300 }}>
                        <h3>Clientes Inadimplentes</h3>
                        <p>{numInad}</p>
                    
                    </Card>

                    <Card bordered={true}className={Styles.Card} style={{ width: 300 }}>
                        <h3>Clientes Adimplentes</h3>
                        <p>{adimplentes}</p>
                    
                    </Card>

                    <Card bordered={true}className={Styles.Card} style={{ width: 300 }}>
                        <h3>Total arrecadado</h3>
                        <p>R$ {total.toFixed(2)}</p>
                    </Card> 
                </Col>
            </Row>

            <Row>
                <div className={Styles.Titulo}>
                    <h2>Clientes Cadastrados</h2>
                </div>
            </Row>

            <Row justify="center">
            {
                userList && userList.total == 0  ?
                <div className={Styles.Loading}>
                    <LoadingOutlined />
                    <h2>Loading</h2>
                </div>
                :
                <Table  columns={columns} dataSource={userList?.search} pagination={{
                    
                }}/>
            }
            </Row>
        </Col>
    )
}

export default MainContent