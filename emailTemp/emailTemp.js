import {Html, Head, Font, Preview, Heading, Row, Section, Text, Button} from '@react-email/components';

export default function VerificationEmail({email, name, msg}){
    return (
        <Html>
            <Head>
                <title>Contact Email</title>
                <Font  fontFamily="Roboto"  fallbackFontFamily="Verdana" webFont={{
                    url:'https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2', format: 'woff2'
                }}
                fontWeight={400}
                fontStyle= 'normal'
                />
            </Head>
            <Preview>Here&apos;s email:{email}</Preview>
            <Section>
                <Row>
                <Heading as="h2">Hello {name},</Heading>
                </Row>
                <Row>
                    <Text>
                        Thank you for Visiting Our Shop. 
                    </Text>
                </Row>
                <Row>
                    <Text>{msg}</Text>
                </Row>
                {/* <Row>
                    <Text>
                        If you did not request this code , please ignore this email.
                    </Text>
                </Row> */}
            </Section>
        </Html>
    );
}