const nodeMailer = require('nodeMailer')


const html = '<h1>Hello Sagar</h1> <p1>welcome to javascript email sending world</p1>';

async function main() {
    const transporter = await nodeMailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'sagarsunar202@gmail.com',
            pass: '**** **** **** ****' //use app generated password[Refer readme]
        }
    });

    const info = await transporter.sendMail(
        {
            from: 'Sagar Sunar <sagarsunar202@gmail.com>',
            to: 'sagarsunar202@gmail.com',
            subject: 'Testing, email sending',
            html: html,
        }
    )

    console.log("message sent:: "+info.messageId);
}

main()
.catch(e => console.log(e));


