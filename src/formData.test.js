const fetchMock = require('fetch-mock');

describe('Skill Form Submission', () => {
    let skillForm;
    beforeEach(() => {
        document.body.innerHTML = `
        <form id="register-skill-form">
            <input id="name_skill" type="text" value="John Doe"/>
            <input id="email_skill" type="email" value="johndoe@example.com"/>
        </form>
        `;
        skillForm = document.getElementById("register-skill-form");
    });

    afterEach(() => {
        fetchMock.reset();
    });

    it('should submit form data and call the API', (done) => {
        fetchMock.post('https://talentmatchingbackend.onrender.com/api/v1/users', {});
        const submitEvent = new Event('submit');
        skillForm.dispatchEvent(submitEvent);

        setTimeout(() => {
            const [url, options] = fetchMock.lastCall('https://talentmatchingbackend.onrender.com/api/v1/users');
            const formData = new FormData(skillForm);
            expect(url).toEqual('https://talentmatchingbackend.onrender.com/api/v1/users');
            expect(options.method).toEqual('POST');
            expect(options.body).toEqual(formData);
            done();
        }, 0);
    });
});


describe('Project Form Submission', () => {
    let projectForm;
    beforeEach(() => {
        document.body.innerHTML = `
        <form id="register-project-form">
            <input id="name_skill" type="text" value="John Doe"/>
            <input id="email_skill" type="email" value="johndoe@example.com"/>
        </form>
        `;
        projectForm = document.getElementById("register-project-form");
    });

    afterEach(() => {
        fetchMock.reset();
    });

    it('should submit form data and call the API', () => {
        fetchMock.post('https://talentmatchingbackend.onrender.com/api/v1/projects', {});
        const submitEvent = new Event('submit');
        projectForm.dispatchEvent(submitEvent)
        expect(fetchMock.lastUrl()).toEqual('https://talentmatchingbackend.onrender.com/api/v1/projects');
        expect(fetchMock.lastOptions().method).toEqual('POST');
        const expectedBody = new FormData(projectForm);
        const receivedBody = fetchMock.lastOptions().body;
        expect(receivedBody.get('name_skill')).toEqual(expectedBody.get('name_skill'));
        expect(receivedBody.get('email_skill')).toEqual(expectedBody.get('email_skill'));
    });

    it('should show an error message if the form is missing required fields', () => {
        const originalAlert = window.alert;
        const mockAlert = jest.fn();
        window.alert = mockAlert;
        const nameInput = document.getElementById("name_skill");
        const emailInput = document.getElementById("email_skill");
        nameInput.value = '';
        emailInput.value = '';

        const submitEvent = new Event('submit');
        projectForm.dispatchEvent(submitEvent);

        expect(mockAlert).toHaveBeenCalledWith('Bitte gib deine Email und deinen Namen an');
        window.alert = originalAlert;
    });
});
