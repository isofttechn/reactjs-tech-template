import React, { useState } from "react";
import {toast } from 'react-toastify';
import {LoadingOutlined } from '@ant-design/icons';


const HireDeveloper = () => {
        //Create state for all variables 
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('')
    const [angularDeveloper, setAngularDeveloper] = useState('')
    const [reactDeveloper, setReactDeveloper] = useState('')
    const [flutterDeveloper, setFlutterDeveloper] = useState('')
    const [nodeDeveloper, setNodeDeveloper] = useState('')
    const [mobileDeveloper, setMobileDeveloper] = useState('')
    const [desktopDeveloper, setDesktopDeveloper] = useState('')
    const [dedicatedDeveloper, setDedicatedDeveloper] = useState('')
    const [softwareTeamDeveloper, setSoftwareTeamDeveloper] = useState('')
    const [phpDeveloper, setPhpDeveloper] = useState('')
    const [pythonDeveloper, setPythonDeveloper] = useState('')
    const [rubyOnRailsDeveloper, setRubyOnRailsDeveloper] = useState('')
    const [aspneDeveloper, setAspneDeveloper] = useState('')
    const [iotAppDeveloper, setIotAppDeveloper] = useState('')
    const [skypeOrWhatsapp, setSkypeOrWhatsapp] = useState('')
    const [other, setOther] = useState('')
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)
    const [status, setStatus] = useState("Submit");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    setStatus("Sending...");
    const { name, email, phone, angularDeveloper, reactDeveloper, flutterDeveloper, nodeDeveloper, desktopDeveloper, dedicatedDeveloper, softwareTeamDeveloper, phpDeveloper, pythonDeveloper, rubyOnRailsDeveloper, aspneDeveloper, iotAppDeveloper, skypeOrWhatsapp, other, message } = e.target.elements;
    let details = {
              name: name.value,
      email: email.value,
      phone: phone.value,
      angularDeveloper: angularDeveloper.value,
      reactDeveloper: reactDeveloper.value,
      flutterDeveloper: flutterDeveloper.value,
      nodeDeveloper: nodeDeveloper.value,
      desktopDeveloper: desktopDeveloper.value,
      dedicatedDeveloper: dedicatedDeveloper.value,
      softwareTeamDeveloper: softwareTeamDeveloper.value,
      phpDeveloper: phpDeveloper.value,
      pythonDeveloper: pythonDeveloper.value,
      aspneDeveloper: aspneDeveloper.value,
      rubyOnRailsDeveloper: rubyOnRailsDeveloper.value,
      iotAppDeveloper: iotAppDeveloper.value,
      skypeOrWhatsapp: skypeOrWhatsapp.value,
      other: other.value,
      message: message.value,
    };

    let response = await fetch("https://skylightnet.org/hiredev", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    toast(result.status);
    setLoading(false)

  };

    return (
        <div>
 <div className="col-lg-6">
  {/*start Modal button */}
  {/* <a href="#" className="btn-main bg-btn2 lnk" data-toggle="modal" data-target="#modalform-full">Launch modal<i className="fas fa-chevron-right fa-icon" /><span className="circle" /></a> */}
  {/*end Modal button */}
  {/*start Modal html */}
  <div className="popup-modalfull">
    <div className="modal" id="modalform-full">
      <div className="modal-dialog">
        <div className="modal-content">
          <button type="button" className="closes abt" data-dismiss="modal">×</button>
          <div className="modal-body">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-8 text-center">
                  <h3 className="mb10">Hire dedicated developers to scale your business</h3>
                  <p>
                    Hire top engineers within 3 days.
                    Our engineers quickly adopt your culture to remove bottlenecks from your roadmap.

                  </p>
                  {loading ? (<LoadingOutlined style={{fontSize: '35px', color: '#08c'}}/>) 
                    : (<h4 align="center"></h4>)}
                </div>
              </div>
              <div className="row justify-content-center mt30">
                <div className="col-md-9">
                  <div className="form-block fdgn2 mt10 mb10">
                    <form onSubmit={handleSubmit}>
                      <div className="fieldsets row">
                        <div className="col-md-6">
                          <input 
                        type="text" 
                        placeholder="Full Name" 
                        name="fullName"
                        id="fullName"
                        value={fullName}
                       onChange={(e) => setFullName(e.target.value)}
                         />
                        </div>

                        <div className="col-md-6">
                          <input 
                          type="email" 
                          placeholder="Email Address" 
                          name="email" 
                          id="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}

                          />
                          </div>
                      </div>		
                      <div className="fieldsets row">
                        <div className="col-md-6 form-group">
                          <div className="row no-gutters">
                            <div className="col-md-4"><select required="required" style={{padding: '0px 5px'}}>
                                <option value>+234</option>
                              </select> </div>
                            <div className="col-md-8 pl5">
                              <input 
                              type="text" 
                              name="phone"
                              id="phone"
                              value={phone}
                              onChange={(e) => setPhone(e.target.value)}
                              placeholder="Phone No*" 
                              required="required" />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 form-group">
                          <select required="required">
                            <option value>Hiring?</option>
                            <option 
                            name="angularDeveloper" 
                            id="angularDeveloper" 
                            value={angularDeveloper} 
                            onChange={(e) => setAngularDeveloper(e.target.value)}
                            >
                            
                            
                              Angular Developer
                            </option>

                            <option 
                            name="reactDeveloper" 
                            id="reactDeveloper" 
                            value={reactDeveloper}
                            onChange={(e) => setReactDeveloper(e.target.value)}
                            >React Developer
                            </option>
                            <option 
                            name="flutterDeveloper" 
                            id="flutterDeveloper" 
                            value={flutterDeveloper}
                            onChange={(e) => setFlutterDeveloper(e.target.value)}
                            >Flutter Developer
                            </option>
                            <option 
                            name="nodeDeveloper" 
                            id="nodeDeveloper" 
                            value={nodeDeveloper}
                            onChange={(e) => setNodeDeveloper(e.target.value)}
                            >Nodejs Developer
                            </option>
                            <option 
                            name="mobileDeveloper" 
                            id="mobileDeveloper" 
                            value={mobileDeveloper}
                            onChange={(e) => setMobileDeveloper(e.target.value)}
                            >Mobile App Developer
                            </option>
                            <option 
                            name="desktopDeveloper" 
                            id="desktopDeveloper" 
                            value={desktopDeveloper}
                            onChange={(e) => setDesktopDeveloper(e.target.value)}
                            >Desktop App Developer
                            </option>
                            <option 
                            name="dedicatedDeveloper" 
                            id="dedicatedDeveloper" 
                            value={dedicatedDeveloper}
                            onChange={(e) => setDedicatedDeveloper(e.target.value)}
                            >Dedicated Software Developer
                            </option>
                            <option 
                            name="softwareTeamDeveloper" 
                            id="softwareTeamDeveloper" 
                            value={softwareTeamDeveloper}
                            onChange={(e) => setSoftwareTeamDeveloper(e.target.value)}
                            >Software Team</option>
                            <option 
                            name="phpDeveloper" 
                            id="phpDeveloper" 
                            value={phpDeveloper}
                            onChange={(e) => setPhpDeveloper(e.target.value)}
                            >PHP Developer</option>
                            <option 
                            name="pythonDeveloper" 
                            id="pythonDeveloper" 
                            value={pythonDeveloper}
                            onChange={(e) => setPythonDeveloper(e.target.value)}
                            >Python Developer</option>
                            <option 
                            name="rubyOnRailsDeveloper" 
                            id="rubyOnRailsDeveloper" 
                            value={rubyOnRailsDeveloper}
                            onChange={(e) => setRubyOnRailsDeveloper(e.target.value)}
                            >Ruby on Rails Developer</option>
                            <option 
                            name="aspneDeveloper" 
                            id="aspneDeveloper" 
                            value={aspneDeveloper}
                            onChange={(e) => setAspneDeveloper(e.target.value)}
                            >ASP.NET Developer</option>
                            <option 
                            name="iotAppDeveloper" 
                            id="iotAppDeveloper" 
                            value={iotAppDeveloper}
                            onChange={(e) => setIotAppDeveloper(e.target.value)}
                            >IoT App Developer</option>
                            <option name="Other" 
                            id="Other" 
                            value={other}
                            onChange={(e) => setOther(e.target.value)}
                            >Other</option>
                          </select>
                        </div>
                      </div>
                      <div className="fieldsets row">
                        <div className="col-md-6"><select required="required">
                            <option name="" value>Your Budget*</option>
                            <option name="" value="Less than $5,000">Less than $5,000</option>
                            <option name="" value="$5,000 - $10,000">$5,000 - $10,000</option>
                            <option name="" value="$10,000 - $20,000">$10,000 - $20,000</option>
                            <option name="" value="$20,000 - $35,000">$20,000 - $35,000</option>
                            <option name="" value="$35,000 - $50,000">$35,000 - $50,000</option>
                            <option name="" value="$50,000 - $1,00,000">$50,000 - $1,00,000</option>
                            <option name="" value="$1,00,000+">$1,00,000+</option>
                          </select></div>
                        <div className="col-md-6">
                          <input type="text" 
                          name="skypeOrWhatsapp" 
                          id="skypeOrWhatsapp" 
                          value={skypeOrWhatsapp}
                          placeholder="Skype ID/Whatsapp No." 
                          required="required" 
                        onChange={(e) => setSkypeOrWhatsapp(e.target.value)}

                          /></div>
                      </div>
                      <div className="fieldsets row">
                        <div className="col-md-12"><textarea 
                        placeholder="Message" 
                        name="message" 
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        /></div>					
                      </div>
                     
                      {/* <div className="row">
                        <div className="col-md-12 form-group">
                          <div className="custom-file">
                            <input type="file" className="custom-file-input mb0" id="customFile" />
                            <label className="custom-file-label" htmlFor="customFile">Choose file</label>
                          </div>
                          <p><small>Please upload maximum 5 files Only pdf, docx and doc files.</small></p>
                        </div>
                      </div> */}

                      <div className="fieldsets row mt30 pb20 justify-content-center">
                        <div className="col-md-8">
                          <button type="submit" name="submit" className="lnk btn-main bg-btn" data-dismiss="modal">Submit <i className="fas fa-chevron-right fa-icon" /><span className="circle" /></button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*end Modal html  */}
</div>

        </div>
    )
}

export default HireDeveloper;
