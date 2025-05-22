var API = {
  LMSInitialize: function () { return "true"; },
  LMSFinish: function () { return "true"; },
  LMSGetValue: function (key) { return ""; },
  LMSSetValue: function (key, value) { console.log("Set", key, value); return "true"; },
  LMSCommit: function () { return "true"; },
  LMSGetLastError: function () { return "0"; },
  LMSGetErrorString: function () { return ""; },
  LMSGetDiagnostic: function () { return ""; }
};

var completionSent = false;
