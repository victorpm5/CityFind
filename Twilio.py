from twilio.rest import Client
import Config

client = Client(Config.TWILIO_SID, Config.TWILIO_TOKEN)


def sendMessage(destination, content):
    client.messages.create(
        from_=Config.TWILIO_NUMBER,
        to=destination,
        body=content
    )

