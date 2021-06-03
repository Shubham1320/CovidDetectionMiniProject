

from django.shortcuts import render
from django.http import JsonResponse
from django.conf import settings  
from .apps import FastbertConfig   
from rest_framework.decorators import api_view

# Create your views here.

import os
import matplotlib.pyplot as plt
import cv2
import json
import numpy as np


@api_view(["POST"]) 

def check_result(request):

	#path1 = path.strip('"')

	json_object = json.loads(request.body)
	path = json_object["path"]
	image = cv2.imread(path)  
	image = cv2.cvtColor(image, cv2.COLOR_BGR2RGB) 
	image = cv2.resize(image,(224,224))
	image = np.array(image) / 255
	image = np.expand_dims(image, axis=0)
	resnet_pred = FastbertConfig.resnet_chest.predict(image)
	probability = resnet_pred[0]
	print("Resnet Predictions:")
	if probability[0] > 0.5:
		resnet_chest_pred = str('%.2f' % (probability[0]*100) + '% COVID')
	else:
		resnet_chest_pred = str('%.2f' % ((1-probability[0])*100) + '% NonCOVID')
			
	print(resnet_chest_pred)

	inception_pred = FastbertConfig.inceptionv3_chest.predict(image)
	probability = inception_pred[0]
	print("Inception Predictions:")
	if probability[0] > 0.5:
		inception_chest_pred = str('%.2f' % (probability[0]*100) + '% COVID')
	else:
		inception_chest_pred = str('%.2f' % ((1-probability[0])*100) + '% NonCOVID')
			
	print(inception_chest_pred)

	vgg_pred = FastbertConfig.vgg_chest.predict(image)
	probability = vgg_pred[0]
	print("VGG Predictions:")
	if probability[0] > 0.5:
		vgg_chest_pred = str('%.2f' % (probability[0]*100) + '% COVID')
	else:
		vgg_chest_pred = str('%.2f' % ((1-probability[0])*100) + '% NonCOVID')
			
	print(vgg_chest_pred)

	xception_pred = FastbertConfig.xception_chest.predict(image)
	probability = xception_pred[0]
	print("Xception Predictions:")
	if probability[0] > 0.5:
		xception_chest_pred = str('%.2f' % (probability[0]*100) + '% COVID')
	else:
		xception_chest_pred = str('%.2f' % ((1-probability[0])*100) + '% NonCOVID')
			
	print(xception_chest_pred)

	result_dict = {"resnet": resnet_chest_pred,"inception": inception_chest_pred,"VGG": vgg_chest_pred,"xception": xception_chest_pred}
	
	return JsonResponse(result_dict)

