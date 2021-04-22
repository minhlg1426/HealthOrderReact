import React, {useRef} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';

const OrderForm = () => {
    const inputFirst = useRef(null);
    const inputLast = useRef(null);
    const inputSsn = useRef(null);
    const inputBirthday = useRef(null);
    const inputState = useRef(null);
    const inputCity = useRef(null);

    const calculateAge = (dateStr) => {
        let dob = new Date(dateStr);
        //calculate month difference from current date in time
        let month_diff = Date.now() - dob.getTime();
        
        //convert the calculated difference in date format
        let age_dt = new Date(month_diff); 
        
        //extract year from date    
        let year = age_dt.getUTCFullYear();
        
        //now calculate the age of the user
        let age = Math.abs(year - 1970);
        return age;
    }
    const onCreateForm = (e) => {
        const cName = `${inputLast.current.value},${inputFirst.current.value}`;
        const config = {
            headers: {
              'content-type': 'application/json',
              'Accept': 'application/json'
            }
        }
        const formVal = {
            name: cName,
            age: calculateAge(inputBirthday.current.value),
            ssn: inputSsn.current.value,
            city: inputCity.current.value,
            state: inputState.current.value,
            birthday: inputBirthday.current.value
        }
        axios({
            url: "http://localhost:8080/api/createorder",
            method: "post",
            data: formVal,
            headers: config.headers
          }).then((response) => {
            console.log(response);
          }, (error) => {
            console.log(error);
          });
      /*   axios.post('http://localhost:8080/api/createorder', formVal)
          .then((response) => {
            console.log(response);
          }, (error) => {
            console.log(error);
          }); */
    }
    return (
        <form>
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="inputFirstName">First Name</label>
                    <input type="text" class="form-control" id="inputFirstName" placeholder="First Name" ref={inputFirst} />
                </div>
                <div class="form-group col-md-6">
                    <label for="inputLastName">Last Name</label>
                    <input type="text" class="form-control" id="inputLastName" placeholder="Last Name" ref={inputLast} />
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label class="control-label" for="date">Date</label>
                    <input class="form-control" id="date" name="date" placeholder="MM/DD/YYY" type="text" ref={inputBirthday}/>
                </div>
                <div class="form-group col-md-6">
                    <label class="control-label" for="ssn">Social Security Number</label>
                    <input class="form-control" id="ssn" name="ssn" placeholder="SSN" type="password" ref={inputSsn}/>
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label class="control-label" for="date">City</label>
                    <input class="form-control" id="city" name="city" placeholder="City" type="text" ref={inputCity}/>
                </div>
                <div class="form-group col-md-6">
                    <label class="control-label" for="state">State</label>
                    <select name="state" id="state" class="form-control" ref={inputState}>
                        <option value="">Please select ...</option>
                        <option value="AL">Alabama</option>
                        <option value="AK">Alaska</option>
                        <option value="AZ">Arizona</option>
                        <option value="AR">Arkansas</option>
                        <option value="CA">California</option>
                        <option value="CO">Colorado</option>
                        <option value="CT">Connecticut</option>
                        <option value="DE">Delaware</option>
                        <option value="DC">District of Columbia</option>
                        <option value="FL">Florida</option>
                        <option value="GA">Georgia</option>
                        <option value="HI">Hawaii</option>
                        <option value="ID">Idaho</option>
                        <option value="IL">Illinois</option>
                        <option value="IN">Indiana</option>
                        <option value="IA">Iowa</option>
                        <option value="KS">Kansas</option>
                        <option value="KY">Kentucky</option>
                        <option value="LA">Louisiana</option>
                        <option value="ME">Maine</option>
                        <option value="MD">Maryland</option>
                        <option value="MA">Massachusetts</option>
                        <option value="MI">Michigan</option>
                        <option value="MN">Minnesota</option>
                        <option value="MS">Mississippi</option>
                        <option value="MO">Missouri</option>
                        <option value="MT">Montana</option>
                        <option value="NE">Nebraska</option>
                        <option value="NV">Nevada</option>
                        <option value="NH">New Hampshire</option>
                        <option value="NJ">New Jersey</option>
                        <option value="NM">New Mexico</option>
                        <option value="NY">New York</option>
                        <option value="NC">North Carolina</option>
                        <option value="ND">North Dakota</option>
                        <option value="OH">Ohio</option>
                        <option value="OK">Oklahoma</option>
                        <option value="OR">Oregon</option>
                        <option value="PA">Pennsylvania</option>
                        <option value="RI">Rhode Island</option>
                        <option value="SC">South Carolina</option>
                        <option value="SD">South Dakota</option>
                        <option value="TN">Tennessee</option>
                        <option value="TX">Texas</option>
                        <option value="UT">Utah</option>
                        <option value="VT">Vermont</option>
                        <option value="VA">Virginia</option>
                        <option value="WA">Washington</option>
                        <option value="WV">West Virginia</option>
                        <option value="WI">Wisconsin</option>
                        <option value="WY">Wyoming</option>
                    </select>
                </div>
            </div>
            <div class="form-row">
                    <div class="form-group col-md-12">
                        <button class="form-control" type="button" class="btn btn-primary" onClick={onCreateForm}>Create Order</button>
                    </div>
                </div>     
        </form>
    );
}

export default OrderForm;