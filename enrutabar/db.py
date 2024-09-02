from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent

POSTGRES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'rutabarDB',
        'USER': 'postgres',
        'PASSWORD': '123',
        'HOST': 'rutabar-app-db',
        'PORT': '5432',
    }
}

SQLITE = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}


