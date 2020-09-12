#version 450

layout(binding = 0) uniform sampler1D uSampler1D;
layout(binding = 1) uniform sampler2D uSampler2D;
layout(binding = 2) uniform sampler2DArray uSampler2DArray;
layout(binding = 3) uniform sampler3D uSampler3D;
layout(binding = 4) uniform samplerCube uSamplerCube;
layout(binding = 5) uniform samplerCubeArray uSamplerCubeArray;
layout(binding = 6) uniform samplerBuffer uSamplerBuffer;
layout(binding = 7) uniform sampler2DMS uSamplerMS;
layout(binding = 8) uniform sampler2DMSArray uSamplerMSArray;

layout(r32f, binding = 9) uniform image1D uImage1D;
layout(r32f, binding = 10) uniform image2D uImage2D;
layout(r32f, binding = 11) uniform image2DArray uImage2DArray;
layout(r32f, binding = 12) uniform image3D uImage3D;
layout(r32f, binding = 13) uniform imageCube uImageCube;
layout(r32f, binding = 14) uniform imageCubeArray uImageCubeArray;
layout(r32f, binding = 15) uniform imageBuffer uImageBuffer;
layout(r32f, binding = 16) uniform image2DMS uImageMS;
layout(r32f, binding = 17) uniform image2DMSArray uImageMSArray;

void main()
{
	int a = textureSize(uSampler1D, 0);
	ivec2 b = textureSize(uSampler2D, 0);
	ivec3 c = textureSize(uSampler2DArray, 0);
	ivec3 d = textureSize(uSampler3D, 0);
	ivec2 e = textureSize(uSamplerCube, 0);
	ivec3 f = textureSize(uSamplerCubeArray, 0);
	int g = textureSize(uSamplerBuffer);
	ivec2 h = textureSize(uSamplerMS);
	ivec3 i = textureSize(uSamplerMSArray);

	int l0 = textureQueryLevels(uSampler1D);
	int l1 = textureQueryLevels(uSampler2D);
	int l2 = textureQueryLevels(uSampler2DArray);
	int l3 = textureQueryLevels(uSampler3D);
	int l4 = textureQueryLevels(uSamplerCube);
	int l5 = textureQueryLevels(uSamplerCubeArray);

	a = imageSize(uImage1D);
	b = imageSize(uImage2D);
	c = imageSize(uImage2DArray);
	d = imageSize(uImage3D);
	e = imageSize(uImageCube);
	f = imageSize(uImageCubeArray);
	g = imageSize(uImageBuffer);
	h = imageSize(uImageMS);
	i = imageSize(uImageMSArray);

	int s0 = textureSamples(uSamplerMS);
	int s1 = textureSamples(uSamplerMSArray);
	int s2 = imageSamples(uImageMS);
	int s3 = imageSamples(uImageMSArray);
}
