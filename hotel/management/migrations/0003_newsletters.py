# Generated by Django 5.0.3 on 2024-06-03 08:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('management', '0002_contactus_sign_up_username'),
    ]

    operations = [
        migrations.CreateModel(
            name='newsletters',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('EmailADD', models.EmailField(max_length=100)),
            ],
        ),
    ]