from django.apps import AppConfig
from tensorflow.keras.models import load_model
import os
import keras
import tensorflow
from django.conf import settings
from tensorflow.keras.models import model_from_json

class FastbertConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'fastbert'
    path = os.path.join(settings.MODELS, "resnet_chest.h5")
    resnet_chest = load_model(path)
    path = os.path.join(settings.MODELS, "inceptionv3_chest.h5")
    inceptionv3_chest = load_model(path)
    path = os.path.join(settings.MODELS, "vgg_chest.h5")
    vgg_chest = load_model(path)
    path = os.path.join(settings.MODELS, "xception_chest.h5")
    xception_chest = load_model(path)

