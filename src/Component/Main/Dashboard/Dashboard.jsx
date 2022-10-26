import logo from '../../../Assets/Images/icon.png'
import { AiFillRightCircle } from 'react-icons/ai'
import smallIcon from '../../../Assets/Images/smallIcon.png'
import bag from '../../../Assets/Images/bag.png'

const Dashboard = () => {
  return (
    <div className="dashboard-main">
        <div className='header'>
            <div>
                <p>Home</p>
                <p>/ Data Analytics Report</p>
            </div>
            <div>
                <div>
                    <div>
                      <img src={logo} alt="" />
                    </div>
                    <div>
                        <p>Sustain Africa</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="stats">
                <div>
                    <div>
                        <label htmlFor="">Select Country</label>
                        <select name="" id="">
                            <option value="">Africa</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="">Select Area</label>
                        <select name="" id="">
                            <option value="">kenya</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="">Select Timeline</label>
                        <select name="" id="">
                            <option value="">Weekly</option>
                        </select>
                    </div>
                </div>
                <div>
                    <div>
                        <h3>389</h3>
                        <p>No of Farmers Served</p>
                    </div>
                    <div>
                        <h3>$1000</h3>
                        <p>Amount Disburshed</p>
                    </div>
                </div>
                <div>
                    <span>Quantity of Fertilizer Supplied</span>
                    <div>
                        <div style={{ color: 'var(--color-primary)'}}>
                            <div><p>15 Kg/Pack</p></div>
                            <div>
                                <h3>90</h3>
                                <p>NPK</p>
                            </div>
                        </div>
                        <div style={{ color: 'var(--color-orange)'}}>
                            <div><p>15 Kg/Pack</p></div>
                            <div>
                                <h3>80</h3>
                                <p>Urea</p>
                            </div>
                        </div>
                        <div style={{ color: '#F7B71F'}}>
                            <div><p>15 Kg/Pack</p></div>
                            <div>
                                <h3>50</h3>
                                <p>MOP</p>
                            </div>
                        </div>
                        <div style={{ color: '#83A01C'}}>
                            <div><p>15 Kg/Pack</p></div>
                            <div>
                                <h3>30</h3>
                                <p>Amonium Sulphate</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div style={{color:'var(--color-primary)'}}>
                        <h3>25</h3>
                        <p>No of Suppliers</p>
                    </div>
                    <div>
                        <div>
                            <h3>Suppliers List</h3>
                            <p style={{fontWeight:"500"}}>View All</p>
                        </div>
                        <div>
                            <div>
                                <div>
                                    <img src={smallIcon} alt="" />
                                    <div>
                                        <span style={{color:'gray', fontWeight:'500'}}>Supplier Name</span>
                                        <p style={{color:'var(--color-primary)', fontWeight:'500'}}>+2213090546</p>
                                    </div>
                                </div>
                                <div><AiFillRightCircle style={{fontSize:'2rem', color:'var(--color-primary)', cursor:'pointer'}}/></div>
                            </div>
                            <div>
                                <div>
                                    <img src={smallIcon} alt="" />
                                    <div>
                                        <span style={{color:'gray', fontWeight:'500'}}>Supplier Name</span>
                                        <p style={{color:'var(--color-primary)', fontWeight:'500'}}>+2213090546</p>
                                    </div>
                                </div>
                                <div><AiFillRightCircle style={{fontSize:'2rem', color:'var(--color-primary)', cursor:'pointer'}}/></div>
                            </div>
                            <div>
                                <div>
                                    <img src={smallIcon} alt="" />
                                    <div>
                                        <span style={{color:'gray', fontWeight:'500'}}>Supplier Name</span>
                                        <p style={{color:'var(--color-primary)', fontWeight:'500'}}>+2213090546</p>
                                    </div>
                                </div>
                                <div><AiFillRightCircle style={{fontSize:'2rem', color:'var(--color-primary)', cursor:'pointer'}}/></div>
                            </div>
                            <div>
                                <div>
                                    <img src={smallIcon} alt="" />
                                    <div>
                                        <span style={{color:'gray', fontWeight:'500'}}>Supplier Name</span>
                                        <p style={{color:'var(--color-primary)', fontWeight:'500'}}>+2213090546</p>
                                    </div>
                                </div>
                                <div><AiFillRightCircle style={{fontSize:'2rem', color:'var(--color-primary)', cursor:'pointer'}}/></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="farmer-list">
                <h3>385 Farmers List</h3>
                <div>
                    <div>
                        <div>
                            <div>
                                <img src={smallIcon} alt="" />
                                <div>
                                    <span>Farmer Name</span>
                                    <p>+2213090456</p>
                                </div>
                            </div>
                            <div ><p style={{fontWeight:'500', color:'var(--color-primary)'}}>$23 Purchase</p></div>
                            {/* <div></div> */}
                        </div>
                        <div>
                            <div>
                                <div>
                                    <img src={bag} alt="" />
                                    <p style={{color:'var(--color-primary)'}}>NPK</p>
                                </div>
                                <div>
                                    <img src={bag} alt="" />
                                    <p style={{color:'var(--color-orange)'}}>Urea</p>
                                </div>
                            </div>
                            <div><AiFillRightCircle style={{fontSize:'2rem', color:'var(--color-primary)', cursor:'pointer'}}/></div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div>
                                <img src={smallIcon} alt="" />
                                <div>
                                    <span>Farmer Name</span>
                                    <p>+2213090456</p>
                                </div>
                            </div>
                            <div ><p style={{fontWeight:'500', color:'var(--color-primary)'}}>$23 Purchase</p></div>
                            {/* <div></div> */}
                        </div>
                        <div>
                            <div>
                                <div>
                                    <img src={bag} alt="" />
                                    <p style={{color:'var(--color-primary)'}}>NPK</p>
                                </div>
                                <div>
                                    <img src={bag} alt="" />
                                    <p style={{color:'var(--color-orange)'}}>Urea</p>
                                </div>
                            </div>
                            <div><AiFillRightCircle style={{fontSize:'2rem', color:'var(--color-primary)', cursor:'pointer'}}/></div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div>
                                <img src={smallIcon} alt="" />
                                <div>
                                    <span>Farmer Name</span>
                                    <p>+2213090456</p>
                                </div>
                            </div>
                            <div ><p style={{fontWeight:'500', color:'var(--color-primary)'}}>$23 Purchase</p></div>
                            {/* <div></div> */}
                        </div>
                        <div>
                            <div>
                                <div>
                                    <img src={bag} alt="" />
                                    <p style={{color:'var(--color-primary)'}}>NPK</p>
                                </div>
                                <div>
                                    <img src={bag} alt="" />
                                    <p style={{color:'var(--color-orange)'}}>Urea</p>
                                </div>
                            </div>
                            <div><AiFillRightCircle style={{fontSize:'2rem', color:'var(--color-primary)', cursor:'pointer'}}/></div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div>
                                <img src={smallIcon} alt="" />
                                <div>
                                    <span>Farmer Name</span>
                                    <p>+2213090456</p>
                                </div>
                            </div>
                            <div ><p style={{fontWeight:'500', color:'var(--color-primary)'}}>$23 Purchase</p></div>
                            {/* <div></div> */}
                        </div>
                        <div>
                            <div>
                                <div>
                                    <img src={bag} alt="" />
                                    <p style={{color:'var(--color-primary)'}}>NPK</p>
                                </div>
                                <div>
                                    <img src={bag} alt="" />
                                    <p style={{color:'var(--color-orange)'}}>Urea</p>
                                </div>
                            </div>
                            <div><AiFillRightCircle style={{fontSize:'2rem', color:'var(--color-primary)', cursor:'pointer'}}/></div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div>
                                <img src={smallIcon} alt="" />
                                <div>
                                    <span>Farmer Name</span>
                                    <p>+2213090456</p>
                                </div>
                            </div>
                            <div ><p style={{fontWeight:'500', color:'var(--color-primary)'}}>$23 Purchase</p></div>
                            {/* <div></div> */}
                        </div>
                        <div>
                            <div>
                                <div>
                                    <img src={bag} alt="" />
                                    <p style={{color:'var(--color-primary)'}}>NPK</p>
                                </div>
                                <div>
                                    <img src={bag} alt="" />
                                    <p style={{color:'var(--color-orange)'}}>Urea</p>
                                </div>
                            </div>
                            <div><AiFillRightCircle style={{fontSize:'2rem', color:'var(--color-primary)', cursor:'pointer'}}/></div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div>
                                <img src={smallIcon} alt="" />
                                <div>
                                    <span>Farmer Name</span>
                                    <p>+2213090456</p>
                                </div>
                            </div>
                            <div ><p style={{fontWeight:'500', color:'var(--color-primary)'}}>$23 Purchase</p></div>
                            {/* <div></div> */}
                        </div>
                        <div>
                            <div>
                                <div>
                                    <img src={bag} alt="" />
                                    <p style={{color:'var(--color-primary)'}}>NPK</p>
                                </div>
                                <div>
                                    <img src={bag} alt="" />
                                    <p style={{color:'var(--color-orange)'}}>Urea</p>
                                </div>
                            </div>
                            <div><AiFillRightCircle style={{fontSize:'2rem', color:'var(--color-primary)', cursor:'pointer'}}/></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Dashboard