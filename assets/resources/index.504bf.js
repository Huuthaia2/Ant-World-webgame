System.register("chunks:///_virtual/zh.ts",["cc"],(function(t){"use strict";var e;return{setters:[function(t){e=t.cclegacy}],execute:function(){e._RF.push({},"10b29UpRGxGiIuB1od1sy3h","zh",void 0);var l=window,n=t("languages",{title_next:"NEXT",title_set:"SETTING",sound_title:"SOUND",shake_title:"SHAKE",quality_title:"QUALITY",quality_high:"HIGH",quality_low:"LOW",task_title:"TASK",get:"CLAMP",doubleGet:"CLAMPx2",normalget:"CLAMP",offline_title:"OFFLINE",helpme_ant0:"WokerAnt",helpme_ant1:"SoldierAnt",helpme_ant2:"WoodAnt"});l.languages||(l.languages={}),l.languages.zh=n,e._RF.pop()}}}));

System.register("chunks:///_virtual/en.ts",["cc"],(function(e){"use strict";var t;return{setters:[function(e){t=e.cclegacy}],execute:function(){t._RF.push({},"80928izJhdJxKQVSF1AeyzJ","en",void 0);var n=window,l=e("languages",{title_next:"NEXT",title_set:"SETTING",sound_title:"SOUND",shake_title:"SHAKE",quality_title:"QUALITY",quality_high:"HIGH",quality_low:"LOW",task_title:"TASK",get:"CLAMP",doubleGet:"CLAMPx2",normalget:"CLAMP",offline_title:"OFFLINE",helpme_ant0:"WokerAnt",helpme_ant1:"SoldierAnt",helpme_ant2:"WoodAnt"});n.languages||(n.languages={}),n.languages.en=l,t._RF.pop()}}}));

System.register("chunks:///_virtual/resources",["./zh.ts","./en.ts"],(function(){"use strict";return{setters:[null,null],execute:function(){}}}));

(function(r) {
  r('virtual:///prerequisite-imports/resources', 'chunks:///_virtual/resources'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});