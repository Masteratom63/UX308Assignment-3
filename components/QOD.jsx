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
            /*elements:[{
            type: "radiogroup",
            name: "SafetyQuestion1",
            isRequired: true,
            showNoneItem: true,
            showOtherItem: true,
            colCount: 1,
            title: "What should you do when you see some water spilled on the floor?",
            choices: [ "Report Management", "Dry it yourself"],
            separateSpecialChoices: true,
            showClearButton: true,
            correctAnswer: "Report Management"}]*/
        }, {
            name: "SafetyQuestion2",
            title:"How many bandages would you apply if you have a big cut? (Trick question)",
            type: "text",
            isRequired: true,
            choice: [
                { value: true, text: "None, Ask expert for help."},
                { value: false, text: "Apply 1 yourself."}
            ]
        }, {
            name: "SafetyQuestion3",
            title: "How would you lift a heavy box?",
            type: "text",
            isRequired: true,
            choice: [
                { value: true, text: "Bend your knees and not your back."},
                { value: false, text: "Use all your strength and pray got to help you lift it."}
            ]
        }, {
            name: "SafetyQuestion4",
            title: "If you are carrying a heavy box, how would you take it down the stairs? (Trick question again)",
            type: "text",
            isRequired: true,
            choice: [
                { value: false, text: "Carefully watching the steps while carrying the box."},
                { value: true, text: "USe a friend's help."}
            ]
        }, {
            name: "SafetyQuestion5",
            title: "If you here an emergency alarm, what would you do?",
            type: "text",
            isRequired: true,
            choice: [
                { value: true, text: "Evacuate the building first."},
                { value: false, text: "Help someone lift their things and then evacuate."}
            ]
        }, {
            name: "SafetyQuestion6",
            title: "If you see a workplace injury not being handled properly, what would you do?",
            type: "text",
            isRequired: true,
            choice: [
                { value: true, text: "Report Management"},
                { value: false, text: "Go on with your day."}
            ]
        }, {
            name: "SafetyQuestion7",
            title: "If you feel unsafe performing the task, what would you do?",
            type: "text",
            isRequired: true,
            choice: [
                { value: true, text: "Report management that you aren't comfortable."},
                { value: false, text: "Do it anyway, since it is your only job."}
            ]
        }, {
            name: "SafetyQuestion8",
            title: "What would you do if you see an employee heading to an uneven floor?",
            type: "text",
            isRequired: true,
            choice: [
                { value: true, text: "Run towards them and stop them before they trip."},
                { value: false, text: "Shout and stop them."}
            ]
        }, {
            name: "SafetyQuestion9",
            title: "If you see a robber pointing a gun at your friend while shouting, and you are standing close to the robber, what would you do? (Serious trick question)",
            type: "text",
            isRequired: true,
            choice: [
                { value: true, text: "Do as robber says."},
                { value: false, text: "Attack robber from behind."}
            ]
        }, {
            name: "SafetyQuestion10",
            title: "If you see a new employee having an improper posture, what should you tell him?",
            type: "text",
            isRequired: true,
            choice: [
                { value: true, text: "Advise them how to lift properly."},
                { value: false, text: "Ask them, 'Do you even lift bro?'"}
            ]
        }]
      };

      const survey = new Model(surveyJson);

      return <Survey model={survey} />;
}

