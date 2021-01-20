import React from "react";
import SubscriptionCourseDesign from "./components/subscription_course_design/SubscriptionCourseDesign";
import SubmitLeadDone from "./components/subscription_course_design/SubmitLeadDone";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={SubscriptionCourseDesign} />
        <Route path="/submit-lead-done" exact component={SubmitLeadDone} />
        {/* <Route path="course/:id" /> ini untuk halaman ada parameter */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
