import React, { useState, useEffect } from 'react';
  
function hocWithFetch(WrappedComponent, requestUrl) {
    
  const WithFetch = (props) => {
    const [data, setData] = useState([]);
    useEffect(() => {
      if (requestUrl) fetchData(requestUrl);
    }, []);  
      
      
    const fetchData = async (requestUrl) => {
        try {
          const response = await fetch(requestUrl);
          
          if (response.ok) {
            const data = await response.json();
            setData(data)  ;
          } else {
            throw new Error('Fetch request error');
          }
          
        } catch (err) {
          // handle an error
        }
      };
      
        return (
          <WrappedComponent 
            data={data} 
            {...props}
            getData={(requestUrl) => this.fetchData(requestUrl)}
            />
        )
    }
    
    return WithFetch; 
  }
  
export default hocWithFetch;