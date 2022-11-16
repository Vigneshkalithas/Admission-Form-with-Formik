import React from 'react';
import { useFormik } from "formik";
import * as yup from "yup";

function Form() {
    const initialValues = {
        name: "",
        birthday: "", 
        gender: "",
        age: "",
        password: "",  //aadhar
        photo: "",   
        time: "",
        tel:"",
        website: "",   
        email: "",
        
       
      };
      const validationSchema = yup.object({
        name: yup.string().min(6).max(15).required("fill your name"),
        birthday: yup.date().required("fill your Date of birth"),
        age: yup.number().min(21).required("fill your age"),
        
        password: yup
          .string()
          .required("fill your Aaadhar")
          .min(8, "Require minimum 8 char.")
          .max(12,"maximum 12"),
       photo: yup
          .mixed()
          .required("file is required")
          .test("fileFormat", "Upload PDF file format.", (value) => {
            value && ["application/pdf"].includes(value.type);
          }),
          // time
          //tel

        website: yup.string().url().required("fill the website link"),
        email: yup.string().email("fill valid email").required("fill email"),
      });
      
      const { values, handleChange, handleSubmit, errors, handleBlur, touched } =
      useFormik({
        initialValues,
        validationSchema,
        onSubmit: (values) => 
         console.log(values),
              });
  return (
    <>
    <div className='formhead'>
        <h3>Admission form</h3>
        <form onSubmit={handleSubmit}>
            <div className='input-head'>
                <label>
             Name :
              <input type="text" name="name" placeholder="Enter your name"
              values={values.name}
              onChange={handleChange}
              onBlur={handleBlur} />

             </label>
             <p>{errors.name && touched.name ? errors.name : null}</p>
             <label> Date of Birth :
            <input
            
              type="date"
              name="birthday"
              placeholder="Enter your birth date"
              values={values.birthday}
              onChange={handleChange}
              onBlur={handleBlur}
            />
     </label>
     <p>
              {errors.birthday && touched.birthday ? errors.birthday : null}
            </p>
            </div>
            <div className='input-head'>
            <label>
            Gender :
            <input
              type="radio"
              name="gender"
              value="male"
              onChange={handleChange}
              onBlur={handleBlur}
            />{" "}
            Male
            <input
              type="radio"
              name="gender"
              value="female"
              onChange={handleChange}
              onBlur={handleBlur}
            />{" "}
            Female
            </label>
            <p>{errors.gender && touched.gender ? errors.gender : null}</p>
            <label>
            Age :
             <input
              
               type="number"
               name="age"
               placeholder="Enter your Age"
               values={values.birthday}
               onChange={handleChange}
               onBlur={handleBlur}
            />
            </label>
            <p>{errors.age && touched.age ? errors.age : null}</p>
            </div>

            <div className='input-head'>
            <label>
            Aadhar :
            <input
              type="password"
              name="password"
              placeholder="Enter your Aadhar"
              values={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            </label>
            <p>
              {errors.password && touched.password ? errors.password : null}
            </p>

            <label>
            Attach Photo as pdf format :
            <input
              type="file"
              name="photo"
              values={values.photo}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            </label>
            <p>{errors.photo && touched.photo ? errors.photo : null}</p>
            </div>
            <div className='input-head'>
            <label>Avaiable Time : 
            <input
             
              type="time"
              name="time"
              values={values.time}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            </label>
            {/* <p>{errors.time && touched.time ? errors.time : null}</p> */}
            <label>
                Tel
                <input type="tel" 
                 name="phone" 
                 placeholder="123-45-678"
                 pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                 values={values.phone}
                 onChange={handleChange}
                 onBlur={handleBlur}/>
              <small>Format: 123-45-678</small>
            
            </label>
            <p>{errors.phone && touched.phone ? errors.phone : null}</p>
            </div>
            <div className='input-head'>
            <label>Website :
            <input
             
              type="url"
              name="website"
              values={values.website}
              onChange={handleChange}
              onBlur={handleBlur}
            />
             </label>
             <p> {errors.website && touched.website ? errors.website : null}</p>
             <label>email :
            <input
             
              type="email"
              name="email"
              placeholder="Enter your email"
              values={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            
            />
             </label>
             <p>{errors.email && touched.email ? errors.email : null}</p>
             
            </div>
            <div><button type="submit">Submit</button></div>
        </form>
       
    </div>
    </>
  )
}

export default Form


{/* <form>
        
     
     <div>
        

       


        
           
            
           
            
          </div>
         
        </form> */}