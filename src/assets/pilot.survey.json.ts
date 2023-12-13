export const surveyJson = {
    "title": "MDTHINK Pilot",
    "logoPosition": "right",
    "pages": [
     {
      "name": "benefitsSelectionPage",
      "elements": [
       {
        "type": "checkbox",
        "name": "benefitsSelection",
        "title": "Select benefits to apply for",
        "hideNumber": true,
        "choices": [
         {
          "value": "SNAP",
          "text": "Get help with food"
         },
         {
          "value": "TCA",
          "text": "Get help with children and childcare"
         },
         {
          "value": "TDAP",
          "text": "Get help for a disability"
         },
         {
          "value": "OHEP",
          "text": "Get help with rent or utilities"
         }
        ],
        "minSelectedChoices": 1
       }
      ],
      "title": {
       "default": "Benefits Selection",
       "es": "Selección de Beneficios",
       "vi": "lựa chọn lợi ích"
      }
     },
     {
      "name": "benefitsConfirmationPage",
      "elements": [
       {
        "type": "html",
        "name": "benefitsConfirmationHeader",
        "html": "<p><b>Based on your last answer, here are some benefits you could try to get</p>\n\n<p><b>Please check all the programs you would like to apply for</b></p>"
       },
       {
        "type": "checkbox",
        "name": "benefitsConfirmation",
        "titleLocation": "hidden",
        "choices": [
         {
          "value": "SNAP",
          "text": "**Help with food**<br>**Supplemental Nutrition Assistance Program (SNAP)**<br>Helps people pay for groceries. Used to be known as food stamps. You get money added to an EBT card and can use it for food.<br>How much you can get depends on the number of people in your household and how much money you make.",
          "visibleIf": "{benefitsSelection} anyof ['SNAP']"
         },
         {
          "value": "TCA",
          "text": "**Help with children and childcare**<br>**Temporary Cash Assistance (TCA)**<br>Gives cash and helps to pay for childcare or things you need to go to work. It’s for individuals and families with children.<br>Getting benefits depends on you or your family member’s age, income, or pregnancy status.<br>This is Maryland’s version of the federal program Temporary Assistance to Needy Family’s (TANF)",
          "visibleIf": "{benefitsSelection} anyof ['TANF']"
         },
         {
          "value": "TDAP",
          "text": "**Help for a disability**<br>**Temporary Disability Assistance Program (TDAP)**<br>Gives cash to people who are low-income and living with short-term disability or who are waiting for federal disability help. People with children who are dependents cannot get this benefit.",
          "visibleIf": "{benefitsSelection} anyof ['TDAP']"
         },
         {
          "value": "OHEP",
          "text": "**Help with rent or utilities**<br>**Office of Home Energy Programs (OHEP)**<br>Helps with heating, electric and gas bills. Maryland will pay the company that sends you bills directly. How much they pay depends on the number of people in your household and how much money you and your household make.",
          "visibleIf": "{benefitsSelection} anyof ['OHEP']"
         },
         {
          "value": "Other",
          "text": "**I want to add another program not shown here**<br>If you believe there are other benefits you can get or a caseworker at an office believes you can get benefits from another program, choose this option."
         }
        ],
        "choicesVisibleIf": "{benefitsSelection} anyof ['SNAP']"
       }
      ],
      "title": "Benefits Confirmation"
     },
     {
      "name": "snapStartPage",
      "elements": [
       {
        "type": "html",
        "name": "snapStartContent",
        "visibleIf": "{benefitsConfirmation} allof ['SNAP']",
        "html": "<p><b>We see you want to apply to SNAP, we wanted to let you know we will check to see \n if you can get food benefits \n in 7 days or less when you submit your application.</p>\n<p><b>This is called expedited SNAP.  Curious? Learn more here.</b></p>"
       }
      ]
     },
     {
      "name": "pageHouseholdStart",
      "elements": [
       {
        "type": "html",
        "name": "householdStartContent",
        "html": "<b>Let’s get to know you and build\nyour household</b>"
       }
      ]
     },
     {
      "name": "selfApplyPage",
      "elements": [
       {
        "type": "boolean",
        "name": "selfApply",
        "title": "Is someone helping you fill out this application or are you doing it yourself?",
        "hideNumber": true,
        "isRequired": true,
        "labelTrue": "Yes, someone is helping me",
        "labelFalse": "No, I'm doing it myself"
       }
      ]
     },
     {
      "name": "applicantInfo",
      "elements": [
       {
        "type": "text",
        "name": "firstName",
        "title": "What is your first name?",
        "hideNumber": true
       },
       {
        "type": "text",
        "name": "middleName",
        "title": "What is your middle name?",
        "hideNumber": true
       },
       {
        "type": "text",
        "name": "lastName",
        "title": "What is your last name?",
        "hideNumber": true
       },
       {
        "type": "text",
        "name": "birthDate",
        "title": "When were you born?",
        "inputType": "date"
       },
       {
        "type": "dropdown",
        "name": "sex",
        "title": "What is your sex?",
        "choices": [
         "male",
         "female",
         "other"
        ]
       },
       {
        "type": "text",
        "name": "ssn",
        "title": "What is your social security number (SSN)?"
       },
       {
        "type": "dropdown",
        "name": "maritalStatus",
        "title": "What is your marital status?",
        "choices": [
         "single",
         "married",
         "divorced"
        ]
       },
       {
        "type": "boolean",
        "name": "veteran",
        "title": "Are you a veteran?"
       }
      ]
     }
    ],
    "showTitle": false
   }