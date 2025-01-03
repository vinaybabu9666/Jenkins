import React from 'react';

function Main() {
    return (
        <body>
            <div id="myModal1" className="modal fade" role="dialog">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>
                        
                        <div id="ecww-widgetwrapper" style={{ minWidth: '250px', width: '100%' }}>
                            <div id="ecww-widget" style={{ position: 'relative', paddingTop: '0', paddingBottom: '280px', height: '0', overflow: 'hidden' }}></div>
                            <div id="ecww-more" style={{ background: '#77162e', font: 'normal 13px/1 Helvetica, Arial, Verdana, Sans-serif', padding: '10px 0', color: '#FFF', textAlign: 'center', width: '100%', clear: 'both', margin: '0', float: 'left' }}>
                            <a style={{ background: '#77162e', color: '#FFF', textDecoration: 'none', borderBottom: '1px dotted #77162e' }} href="https://emicalculator.net/" title="Loan EMI Calculator" rel="noreferrer" target="_blank">emicalculator.net</a>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
       
            <div id="myModal2" className="modal fade" role="dialog">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">APPLY FOR LOAN</h4>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                            <br />
                        </div>
                        <div className="modal-body">
                            <form action="loanform.php" method="post" className="cbp-mc-form">
                                <div className="cbp-mc-column">
                                    <div className="form-group">
                                        <label htmlFor="make">Make</label>
                                        <input type="text" id="make" name="make" placeholder="" className="form-control" required maxLength="50" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="model">Model</label>
                                        <input type="text" id="model" name="model" placeholder="" className="form-control" required maxLength="50" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="varient">Variant</label>
                                        <input type="text" id="variant" name="variant" placeholder="" className="form-control" required maxLength="50" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="year">Year of Manufacture</label>
                                        <input type="text" id="year" name="year" placeholder="" className="form-control" required maxLength="50" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="name">Name</label>
                                        <input type="text" id="name" name="name" placeholder="" className="form-control" required maxLength="50" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="phone">Phone Number</label>
                                        <input type="text" id="phone" name="phone" placeholder="" className="form-control" required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input type="text" id="email" name="email" placeholder="" className="form-control" required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="city">City</label>
                                        <input type="text" id="city" name="city" placeholder="" className="form-control" required maxLength="50" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="state">State</label>
                                        <input type="text" id="state" name="state" placeholder="" className="form-control" required maxLength="50" />
                                    </div>
                                </div>
                                <div className="cbp-mc-submit-wrap"><input className="cbp-mc-submit" type="submit" value="Submit" /></div>
                            </form>
                            <div id="success_message" style={{ width: '100%', height: '100%', display: 'none' }}><h3>Registered successfully!</h3></div>
                            <div id="error_message" style={{ width: '100%', height: '100%', display: 'none' }}><h3>Error</h3> Sorry there was an error sending your form.</div>
                        </div>
                    </div>
                </div>
            </div>
            <section id="thankyou">
                <div id="myModal3" className="modal fade" role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div id="cancellationrequestModal" className="modal fade" role="dialog">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Cancellation Request</h4>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                            <br />
                        </div>
                        <div className="modal-body">
                            <form action="nachForm.php" method="post" className="cbp-mc-form">
                                <div className="cbp-mc-column">
                                    <div className="form-group">
                                        <label htmlFor="Name">Name</label>
                                        <input type="text" id="name" name="name" placeholder="" className="form-control" required maxLength="50" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="PhoneNumber">Phone Number</label>
                                        <input type="phone" id="PhoneNumber" name="PhoneNumber" placeholder="" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="LoanNumber">Loan Number</label>
                                        <input type="text" id="LoanNumber" name="LoanNumber" placeholder="" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="VehicleNumber">Vehicle Number</label>
                                        <input type="text" id="VehicleNumber" name="VehicleNumber" placeholder="" className="form-control" required />
                                    </div>
                                </div>
                                <div className="cbp-mc-submit-wrap"><input className="cbp-mc-submit" type="submit" value="Submit" /></div>
                            </form>
                            <div id="success_message" style={{ width: '100%', height: '100%', display: 'none' }}><h3>Registered successfully!</h3></div>
                            <div id="error_message" style={{ width: '100%', height: '100%', display: 'none' }}><h3>Error</h3> Sorry there was an error sending your form.</div>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    );
}

export default Main;
