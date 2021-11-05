import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';

const RedirectOnLoad = () => {
    const [count, setCount] = useState(5);
    let history = useHistory()

    useEffect(() =>{
        const interval = setInterval(() =>{
            setCount((currentCount) => --currentCount);
        }, 1000)
        //Redirect once count is equal to 0
        count === 0 && history.push('/login');
        //Cleanup Interval - Counter
        return () =>clearInterval(interval);
    }, [count])

    return (
        <div>
 <div className="row justify-content-center t-ctr mt70">
  <div className="col-lg-4 col-sm-6 tilt3d mt70">
    <div className="statistics">
     
      <div className="statnumb mt70">
          <span className="text-danger">Proteted!</span> &nbsp;<p>Redirecting you in...
              <span className="counter text-center">{count} seconds</span>
          </p>
        
      </div>
    </div>
  </div>
</div>

        </div>
    )
}

export default RedirectOnLoad;
