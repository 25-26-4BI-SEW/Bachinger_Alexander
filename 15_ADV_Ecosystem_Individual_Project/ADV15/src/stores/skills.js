import {defineStore} from 'pinia';

export const useSkillStore = defineStore('skills', {
    state: () => ({
        skills: [
            {
                "title": "skills.frontend",
                "color": 1,
                "skills": [
                    {"file": "html.svg", "name": "HTML",},
                    {"file": "css.svg", "name": "CSS",},
                    {"file": "javascript.svg", "name": "JavaScript",},
                    {"file": "bootstrap.svg", "name": "Bootstrap",},
                    {"file": "vue.svg", "name": "Vue.js"}
                ]
            },
            {
                "title": "skills.backend",
                "color": 2,
                "skills": [
                    {"file": "node.svg", "name": "Node.js"},
                    {"file": "php.svg", "name": "PHP"},
                    {"file": "java.svg", "name": "Java"},
                    {"file": "python.svg", "name": "Python"},
                    {"file": "mysql.svg", "name": "MySQL"}
                ]
            },
            {
                "title": "skills.dev",
                "color": 3,
                "skills": [
                    {"file": "linux.svg", "name": "Linux"},
                    {"file": "bash.svg", "name": "Bash",},
                    {"file": "docker.svg", "name": "Docker"}
                ]
            },
            {
                "title": "skills.tools",
                "color": 4,
                "skills": [
                    {"file": "office.svg", "name": "MS Office",},
                    {"file": "git.svg", "name": "Git"}
                ]
            },
            {
                "title": "skills.cms",
                "color": 5,
                "skills": [
                    {"file": "wordpress.svg", "name": "WordPress"},
                    {"file": "typo3.svg", "name": "TYPO3"},
                    {"file": "adobe.svg", "name": "Adobe CC"}
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
