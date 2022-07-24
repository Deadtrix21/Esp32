import { PropOptions } from 'vue';
<template>
  <div app>
    <div>
        Name: {{ User.FirstName }}
    </div>
    <section>
      <!--
                    // Note The core Data
                -->
      <v-text-field
        v-model="User.FirstName"
        label="Name"
        placeholder="First Name"
        :rules="rules.name"
        filled
        rounded
        dense
      >
      </v-text-field>
    </section>
  </div>
</template>

<script lang="ts">
interface User{
    FirstName   : string,
    LastName    : string,
    Email       : string,
}



class Person implements User{
    FirstName   : string
    LastName    : string
    Email       : string

    constructor(first:string = "", last:string = "", email:string = ""){
        this.FirstName = first
        this.LastName = last
        this.Email = email
    }
}




function VerifyName (val : string) : string | void {
    if (val == null || val == ''){return "This Field Is REQUIRED"}
    else if (val.length < 3){return "This Needs To Be More Than 3 Char"}
    return;
}

export default {
    data : function (){
        return {
            UserClass : new Person(),
            rules:{
                name :[():string | void => {return VerifyName(this.UserClass.FirstName);}]
            }
        }
    },
}
</script>

<style scoped></style>

