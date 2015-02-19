function highlight(str) {
  return str.replace(/`(.+?)`/g, '<strong>$1</strong>');
}

module.exports = {
    experience_type : {"internship": "（实习）"},
    skill_type : {"frontend": "Web 前端", "backend": "Web 后端", "miscellaneous": "其他"},
    education_type : {"undergraduate": "（本科）"},
    link_type: {"zhihu": "知乎", "doubanbook": "豆瓣读书"},
    highlight: highlight
};

var resume_data = require('./resume.json');
for (var item in resume_data) {
    module.exports[item] = resume_data[item];
}
