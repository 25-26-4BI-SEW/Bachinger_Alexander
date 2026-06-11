import {defineStore} from 'pinia';

export const useSkillStore = defineStore('skills', {
    state: () => ({
        skills: [
            {
                "title": "skills.frontend",
                "color": 1,
                "skills": [
                    {
                        "file": "html.svg",
                        "name": "HTML",
                        "link_src": "https://wikipedia.org/wiki/Hypertext_Markup_Language"
                    },
                    {
                        "file": "css.svg",
                        "name": "CSS",
                        "link_src": "https://wikipedia.org/wiki/Cascading_Style_Sheets"
                    },
                    {
                        "file": "javascript.svg",
                        "name": "JavaScript",
                        "link_src": "https://wikipedia.org/wiki/JavaScript"
                    },
                    {
                        "file": "bootstrap.svg",
                        "name": "Bootstrap",
                        "link_src": "https://getbootstrap.com"
                    },
                    {"file": "vue.svg", "name": "Vue.js", "link_src": "https://vuejs.org"}
                ]
            },
            {
                "title": "skills.backend",
                "color": 2,
                "skills": [
                    {"file": "node.svg", "name": "Node.js", "link_src": "https://nodejs.org"},
                    {"file": "php.svg", "name": "PHP", "link_src": "https://www.php.net"},
                    {"file": "java.svg", "name": "Java", "link_src": "https://www.java.com"},
                    {"file": "python.svg", "name": "Python", "link_src": "https://www.python.org"},
                    {"file": "mysql.svg", "name": "MySQL", "link_src": "https://www.mysql.com"}
                ]
            },
            {
                "title": "skills.dev",
                "color": 3,
                "skills": [
                    {
                        "file": "linux.svg",
                        "name": "Linux",
                        "link_src": "https://wikipedia.org/wiki/Linux"
                    },
                    {
                        "file": "bash.svg",
                        "name": "Bash",
                        "link_src": "https://wikipedia.org/wiki/Bash_(Shell)"
                    },
                    {"file": "docker.svg", "name": "Docker", "link_src": "https://www.docker.com"}
                ]
            },
            {
                "title": "skills.tools",
                "color": 4,
                "skills": [
                    {
                        "file": "office.svg",
                        "name": "MS Office",
                        "link_src": "https://www.office.com"
                    },
                    {"file": "git.svg", "name": "Git", "link_src": "https://git-scm.com"}
                ]
            },
            {
                "title": "skills.cms",
                "color": 5,
                "skills": [
                    {
                        "file": "wordpress.svg",
                        "name": "WordPress",
                        "link_src": "https://wordpress.com"
                    },
                    {"file": "typo3.svg", "name": "TYPO3", "link_src": "https://typo3.org"},
                    {"file": "adobe.svg", "name": "Adobe CC", "link_src": "https://www.adobe.com"}
                ]
            }
        ]
    }),

    actions: {
        addSkill(categoryTitle, skill) {
            const cat = this.skills.find((c) => c.title === categoryTitle);
            if (!cat) {
                console.warn(`[SkillStore] Category "${categoryTitle}" not found.`);
                return;
            }
            if (cat.skills.some((s) => s.name === skill.name)) {
                console.warn(`[SkillStore] Skill "${skill.name}" already exists in "${categoryTitle}".`);
                return;
            }
            cat.skills.push({...skill});
        },

        updateSkill(categoryTitle, skillName, payload) {
            const cat = this.skills.find((c) => c.title === categoryTitle);
            if (!cat) {
                console.warn(`[SkillStore] Category "${categoryTitle}" not found.`);
                return;
            }
            const skill = cat.skills.find((s) => s.name === skillName);
            if (!skill) {
                console.warn(`[SkillStore] Skill "${skillName}" not found in "${categoryTitle}".`);
                return;
            }
            Object.assign(skill, payload);
        },

        deleteSkill(categoryTitle, skillName) {
            const cat = this.skills.find((c) => c.title === categoryTitle);
            if (!cat) {
                console.warn(`[SkillStore] Category "${categoryTitle}" not found.`);
                return;
            }
            const index = cat.skills.findIndex((s) => s.name === skillName);
            if (index === -1) {
                console.warn(`[SkillStore] Skill "${skillName}" not found in "${categoryTitle}".`);
                return;
            }
            cat.skills.splice(index, 1);
        }
    }
});
