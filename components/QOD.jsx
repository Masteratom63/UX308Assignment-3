// Modern theme
import 'survey-core/modern.min.css';
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';

export default function(){
    const surveyJson = {
        elements: [{
            name: "FullName",
            title: "Enter your full name:",
            type: "text",
            isRequired: true
        }, {
            name: "EmployeeNumber",
            title: "Enter your employee number:",
            type: "text",
            isRequired: true
        }, {
            name: "SafetyQuestion1",
            title: "What should you do when you see some water spilled on the floor?",
            type: "text",
            isRequired: true,
            validator: [{
                text: "report management"
            }]
        }, {
            name: "SafetyQuestion2",
            title:"How many bandages would you apply if you have a big cut? (Trick question)",
            type: "text",
            isRequired: true
        }, {
            name: "SafetyQuestion3",
            title: "How would you lift a heavy box?",
            type: "text",
            isRequired: true
        }, {
            name: "SafetyQuestion4",
            title: "If you are carrying a heavy box, how would you take it down the stairs? (Trick question again)",
            type: "text",
            isRequired: true
        }, {
            name: "SafetyQuestion5",
            title: "If you here an emergency alarm, what would you do?",
            type: "text",
            isRequired: true
        }, {
            name: "SafetyQuestion6",
            title: "If you see a workplace injury not being handled properly, what would you do?",
            type: "text",
            isRequired: true
        }, {
            name: "SafetyQuestion7",
            title: "If you feel unsafe performing the task, what would you do?",
            type: "text",
            isRequired: true
        }, {
            name: "SafetyQuestion8",
            title: "What would you do if you see an employee heading to an uneven floor?",
            type: "text",
            isRequired: true
        }, {
            name: "SafetyQuestion9",
            title: "If you see a robber pointing a gun at your friend while shouting, and you are standing close to the robber, what would you do? (Serious trick question)",
            type: "text",
            isRequired: true
        }, {
            name: "SafetyQuestion10",
            title: "If you see a new employee having an improper posture, what should you advise him?",
            type: "text",
            isRequired: true
        }]
      };

      const survey = new Model(surveyJson);

      return <Survey model={survey} />;
}

