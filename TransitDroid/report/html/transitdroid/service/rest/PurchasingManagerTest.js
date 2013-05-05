var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":119,"id":1611,"methods":[{"el":40,"sc":2,"sl":25},{"el":60,"sc":2,"sl":42},{"el":78,"sc":2,"sl":62},{"el":98,"sc":2,"sl":80},{"el":117,"sc":2,"sl":100}],"name":"PurchasingManagerTest","sl":23}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_100":{"methods":[{"sl":25}],"name":"testPurchaseSinglePass","pass":false,"statements":[{"sl":27},{"sl":28},{"sl":29},{"sl":30},{"sl":31},{"sl":32},{"sl":34},{"sl":37}]},"test_22":{"methods":[{"sl":100}],"name":"testPurchaseYearlyPass","pass":false,"statements":[{"sl":104},{"sl":106},{"sl":107},{"sl":108},{"sl":109},{"sl":110},{"sl":111},{"sl":114}]},"test_29":{"methods":[{"sl":80}],"name":"testPurchaseMonthlyPass","pass":false,"statements":[{"sl":83},{"sl":85},{"sl":86},{"sl":87},{"sl":88},{"sl":89},{"sl":90},{"sl":91},{"sl":94}]},"test_33":{"methods":[{"sl":42}],"name":"testPurchaseThreeDayPass","pass":false,"statements":[{"sl":45},{"sl":47},{"sl":48},{"sl":49},{"sl":50},{"sl":51},{"sl":52},{"sl":55}]},"test_95":{"methods":[{"sl":62}],"name":"testPurchaseNightlyPass","pass":false,"statements":[{"sl":65},{"sl":67},{"sl":68},{"sl":69},{"sl":70},{"sl":71},{"sl":72},{"sl":75}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [100], [], [100], [100], [100], [100], [100], [100], [], [100], [], [], [100], [], [], [], [], [33], [], [], [33], [], [33], [33], [33], [33], [33], [33], [], [], [33], [], [], [], [], [], [], [95], [], [], [95], [], [95], [95], [95], [95], [95], [95], [], [], [95], [], [], [], [], [29], [], [], [29], [], [29], [29], [29], [29], [29], [29], [29], [], [], [29], [], [], [], [], [], [22], [], [], [], [22], [], [22], [22], [22], [22], [22], [22], [], [], [22], [], [], [], [], []]