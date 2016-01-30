var beautylog = require("beautylog");
beautylog.code("var test = 3; function(){}\nvar = \"super\"",
    {
        language:"javascript"
    }
);