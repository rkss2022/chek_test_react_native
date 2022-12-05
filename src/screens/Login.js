import { Image, StyleSheet, View } from "react-native";
import React from "react";
import { Button, Text, TextInput } from "react-native-paper";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { loginSchema } from "../utils/ValidationSchema";
import { login } from "../Components/features/auth/authSlice";

const Login = () => {
  const dispatch = useDispatch();
  const handleLogin = async (values, { setSubmitting, resetForm }) => {
    const rData = {
      email: values.email,
      password: values.password,
      name: "Smriti",
      phone: 9898989898,
    };

    dispatch(login(rData));
    // console.log(rData);
    // const res = await loginApi(rData);
    // if (values.email === "smriti@gmail.com") {
    //   alert("LoggedIn Successfully");
    //   // dispatch(login(res.data));
    // } else {
    //   alert("Invalid Credentials");
    // }
    setSubmitting(false);
    resetForm();
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/logo.webp")}
        style={{
          width: 350,
          height: 200,
          marginBottom: 0,
          resizeMode: "center",
        }}
      />
      <Formik
        validationSchema={loginSchema}
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          handleLogin(values, { setSubmitting, resetForm });
        }}>
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <>
            <View style={styles.inputView}>
              <TextInput
                keyboardType="email-address"
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
                placeholder="Email"
                style={styles.TextInput}
              />
            </View>
            <Text
              style={{
                color: "red",
                marginTop: -20,
                marginLeft: -160,
                marginBottom: 20,
              }}>
              {errors.email && touched.email && errors.email}
            </Text>

            <View style={styles.inputView}>
              <TextInput
                style={styles.TextInput}
                placeholder="Password"
                secureTextEntry={true}
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
              />
            </View>
            <Text style={{ color: "red", marginTop: -20, marginLeft: -140 }}>
              {errors.password && touched.password && errors.password}
            </Text>
            <Button
              style={{
                width: 300,
                height: 50,
                borderRadius: 5,
                marginTop: 20,
                paddingTop: 4,
              }}
              buttonColor="#f4511e"
              mode="contained"
              onPress={handleSubmit}>
              Login
            </Button>
          </>
        )}
      </Formik>
    </View>
  );
};
export default Login;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFD8A8",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  inputView: {
    width: "75%",
    height: 55,
    marginBottom: 20,
  },

  TextInput: {
    height: 50,
    backgroundColor: "white",
    flex: 1,
    padding: 10,
  },
  loginBtn: {
    color: "#FFFFFF",
    marginTop: 40,
    backgroundColor: "#800080",
  },
});
