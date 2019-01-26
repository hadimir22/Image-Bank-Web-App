import React from 'react'
import { Grid, Button, Menu, Modal, Header, Popup } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import './navbar.css'





const Navbar = (props) => (

    <div>



        <Menu id="menu" fixed='bottom'  >
            <Grid centered container columns={3}>
                <Grid.Row  >
                    <Grid.Column id="col1" only='computer tablet' tablet={4} computer={4}>       </Grid.Column>

                    <Grid.Column id="col2" mobile={16} tablet={8} computer={8}>


                        <Link to='/'>  <Button circular color="black" icon='home' /> </Link>

                        <Link to='/contact'>  <Button circular color="black" icon='phone' /> </Link>

                        <Modal trigger={<Button circular color="black" icon='heart' />} basic size='small'>



                            <Header icon='heart' content='we like you too' />
                            <Modal.Content>
                                <p>
                                    Thanks for liking us
                                </p>
                            </Modal.Content>
                        </Modal>
                        <Popup trigger={<Button circular color="black" icon='question' />}
                            content='This wont take you anywhere'
                            id='pop'
                            inverted
                        />



                    </Grid.Column>

                    <Grid.Column id="col3" only='computer tablet' tablet={4} computer={4}>       </Grid.Column>
                </Grid.Row>

            </Grid>
        </Menu>

    </div>

)

export default Navbar

