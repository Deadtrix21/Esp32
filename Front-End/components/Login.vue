<template>
    <div app>
        <br><br><br><br>
        <v-form ref="form" lazy-validation v-model="valid">
            <v-row justify="center">
                <v-col lg="3">
                    <v-text-field
                        v-model="rPerson.FirstName"
                        label="First Name"
                        placeholder="Name"
                        :rules="rules.fname"
                        filled
                        rounded
                        dense>
                    </v-text-field>
                    <v-text-field
                        v-model="rPerson.LastName"
                        label="Last Name"
                        placeholder="Surname"
                        :rules="rules.lname"
                        filled
                        rounded
                        dense>
                    </v-text-field>
                    <v-text-field
                        v-model="rPerson.Email"
                        label="Email"
                        placeholder="developer.dev@outlook.com"
                        :rules="rules.email"
                        filled
                        rounded
                        dense>
                    </v-text-field>
                    <v-text-field
                        v-model="rPerson.Password"
                        label="Email"
                        placeholder="developer.dev@outlook.com"
                        :rules="rules.email"
                        filled
                        rounded
                        dense>
                    </v-text-field>
                    <v-text-field
                        v-model="PasswordConfirm"
                        label="Email"
                        placeholder="developer.dev@outlook.com"
                        :rules="rules.email"
                        filled
                        rounded
                        dense>
                    </v-text-field>
                    <v-col>
                        <v-btn color="primary" dark small>Sign Up</v-btn>
                        <v-btn color="error" dark small @click="ClearCurForm()">Cancel</v-btn>
                        <v-btn color="success" dark small>Log In</v-btn>
                    </v-col>
                </v-col>   
            </v-row>
        </v-form>
        <br><br><br><br>
        <v-card>
            First Name: {{ rPerson.FirstName }}
            <br>
            Last Name: {{ rPerson.LastName }}
        </v-card>
        
    </div>
</template>

<script lang="ts">
import axios from "axios"
import LoginModule from "@/ts/Login"

const iPerson = new LoginModule.Person();
const iFormRules = new LoginModule.FormRules();

function ClearForm(): void {
    iPerson.Email = ''
    iPerson.FirstName = ''
    iPerson.LastName = ''  
    iPerson.Password = ''
}

export default {
    
    data : function (){
        return {
            valid: true,
            PasswordConfirm:"",
            rPerson : iPerson,
            rules:{
                fname :[():string | void => {return iFormRules.VerifyName(iPerson.FirstName);}],
                lname :[():string | void => {return iFormRules.VerifyName(iPerson.LastName);}],
                email :[():string | void => {return iFormRules.VerifyEmail(iPerson.Email);}]
            }
        }
    },
    methods: {
        ClearCurForm  () {
            ClearForm()
            this.$refs.form.reset();
        },
        async SignUpPost(){
        }
    },
}
</script>

<style scoped></style>

<!--

        this.$axios.post('insert', {
            name: this.name, 
            email: this.email,
            password: this.password 
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });





// axios

const options = {
  url: 'http://localhost/test.htm',
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json;charset=UTF-8'
  },
  data: {
    a: 10,
    b: 20
  }
};

axios(options)
  .then(response => {
    console.log(response.status);
  });
  
// fetch

const url = 'http://localhost/test.htm';
const options = {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json;charset=UTF-8'
  },
  body: JSON.stringify({
    a: 10,
    b: 20
  })
};

fetch(url, options)
  .then(response => {
    console.log(response.status);
  });
  
Note: Both produces the same result but :

Axios has url in request object.		Fetch has no url in request object.

Axios is a stand-alone third party  	Fetch is built into most modern browsers; 
package that can be easily 				no installation is required as such.
installed.

Axios enjoys built-in XSRF 				Fetch does not.
protection.	

Axios uses the data property.			Fetch uses the body property.

Axios’ data contains the object.		Fetch’s body has to be stringified.

Axios request is ok when status is 		Fetch request is ok when response 
200 and statusText is ‘OK’.				object contains the ok property.

Axios performs automatic transforms 	Fetch is a two-step process when
of JSON data.	 						handling JSON data- first, to make the
										 actual request; second, to call the 
                                         .json() method on the response.
                                         
Axios allows cancelling request and 	Fetch does not.
request timeout.

Axios has the ability to intercept 		Fetch, by default, doesn’t provide a
HTTP requests.							way to intercept requests.

Axios has built-in support for 			Fetch does not support upload progress.
download progress.	

Axios has wide browser support.			Fetch only supports Chrome 42+, Firefox
										39+, Edge 14+, and Safari 10.1+ 
                                        (This is known as Backward 
                                        Compatibility).
9


-->