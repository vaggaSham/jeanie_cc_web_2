export const alertHeader = [
  {title:"Patient Details", class:'w-[320px]'},
  {title:"Risk Profile", class:'w-[200px]'},
  {title:"Latest Updates", class:''},
  {title:"Alert Reason", class:''},
  {title:"Core Plan Status", class:''},
  {title:"Action Needed", class:''},
  {title:"Status", class:''},
  {title:"", class:'w-[100px]'},
  ];

export const alertData = [
    {
      patientId: "123456",
      patientName: "Arnold Marsh",
      riskProfile: "High for T2D",
      actionComplet: false,
      actionCount: 62,
      status:'closed'
    },
    {
      patientId: "123456",
      patientName: "Samanta Bullok",
      reason: "Inflated A1C",
      recentChanges: "New lab data received",
      riskProfile: "High for T2D",
      actionComplet: true,
      actionCount: null,
      status:'active'
    },
    {
      patientId: "123456",
      patientName: "Stas Spark",
      reason: "Inflated A1C",
      recentChanges: "New lab data received",
      riskProfile: "High for T2D",
      actionComplet: false,
      actionCount: 42,
      status:'open'
    },
    {
      patientId: "123456",
      patientName: "Tom Muller",
      reason: "Inflated A1C",
      recentChanges: "New lab data received",
      riskProfile: "High for T2D",
      actionComplet: true,
      actionCount: null,
      status:'In progress'
    },
  ];
  export const alertHeader2 = [
    {title:"Patient Details", class:'w-[390px]'},
    {title:"Latest Updates", class:'w-[400px]'},
    {title:"Task Checklist", class:'w-[500px]'},
    {title:"", class:''}
  ];
  export const alertData2 = [
    {
      patientId: "123456",
      patientName: "Arnold Marsh",
      riskProfile: "High for T2D",
      actionComplet: false,
      actionCount: 62,
      status:'closed',
      tasks:[{title: 'Contact patient', status: true}, {title: 'Task one for the care co-ordinator to do.', status: false}]
    },
    {
      patientId: "123456",
      patientName: "Samanta Bullok",
      reason: "Inflated A1C",
      recentChanges: "New lab data received",
      riskProfile: "High for T2D",
      actionComplet: true,
      actionCount: null,
      status:'active',
      tasks:[{title: 'Contact patient', status: false}, {title: 'Task one for the care co-ordinator to do.', status: false}]
    },
    {
      patientId: "123456",
      patientName: "Stas Spark",
      reason: "Inflated A1C",
      recentChanges: "New lab data received",
      riskProfile: "High for T2D",
      actionComplet: false,
      actionCount: 42,
      status:'open',
      tasks:[{title: 'Contact patient', status: false}, {title: 'Task one for the care co-ordinator to do.', status: false}]
    },
    {
      patientId: "123456",
      patientName: "Tom Muller",
      reason: "Inflated A1C",
      recentChanges: "New lab data received",
      riskProfile: "High for T2D",
      actionComplet: true,
      actionCount: null,
      status:'In progress',
      tasks:[{title: 'Contact patient', status: false}, {title: 'Task one for the care co-ordinator to do.', status: false}]
    },
    {
      patientId: "123456",
      patientName: "Stas Spark",
      reason: "Inflated A1C",
      recentChanges: "New lab data received",
      riskProfile: "High for T2D",
      actionComplet: false,
      actionCount: 42,
      status:'open',
      tasks:[{title: 'Contact patient', status: false}, {title: 'Task one for the care co-ordinator to do.', status: false}]
    },
    {
      patientId: "123456",
      patientName: "Tom Muller",
      reason: "Inflated A1C",
      recentChanges: "New lab data received",
      riskProfile: "High for T2D",
      actionComplet: true,
      actionCount: null,
      status:'In progress',
      tasks:[{title: 'Contact patient', status: false}, {title: 'Task one for the care co-ordinator to do.', status: false}]
    },
    {
      patientId: "123456",
      patientName: "Stas Spark",
      reason: "Inflated A1C",
      recentChanges: "New lab data received",
      riskProfile: "High for T2D",
      actionComplet: false,
      actionCount: 42,
      status:'open',
      tasks:[{title: 'Contact patient', status: false}, {title: 'Task one for the care co-ordinator to do.', status: false}]
    },
    {
      patientId: "123456",
      patientName: "Tom Muller",
      reason: "Inflated A1C",
      recentChanges: "New lab data received",
      riskProfile: "High for T2D",
      actionComplet: true,
      actionCount: null,
      status:'In progress',
      tasks:[{title: 'Contact patient', status: false}, {title: 'Task one for the care co-ordinator to do.', status: false}]
    },
  ];