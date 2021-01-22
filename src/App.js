import React from "react";
import SubscriptionCourseDesign from "./components/subscription-course-design/SubscriptionCourseDesign";
import SubmitLeadDone from "./components/subscription-course-design/SubmitLeadDone";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PageNotFound from "./components/page-not-found/PageNotFound";


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={SubscriptionCourseDesign} />
        <Route path="/submit-lead-done" exact component={SubmitLeadDone} />
        <Route path='*' exact component={PageNotFound} />
        {/* <Route path="course/:id" /> ini untuk halaman ada parameter */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
