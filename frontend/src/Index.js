import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Template from "./components/Template";
import Login from "./components/Login";
import DashBoard from "./components/Dashboard";
import CoursePage from "./components/CoursePage";
import Question from "./components/Question";
import Result from "./components/Result";
import NewQuiz from "./components/NewQuiz";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Template />}>
          <Route path="login" element={<Login />} />
          <Route path="dashboard" element={<DashBoard />} />
          <Route path="coursepage" element={<CoursePage />} />
          <Route path="question" element={<Question />} />
          <Route path="result" element={<Result />} />
          <Route path="newquiz" element={<NewQuiz />} />
        </Route>
        {/* No match route */}
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
