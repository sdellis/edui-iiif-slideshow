var manifest = {
	"@context": "http://iiif.io/api/presentation/2/context.json",
	"@id": "http://f2822cab-d84d-4754-92d4-d996aecd3bed",
	"@type": "sc:Manifest",
	"label": "[Click to edit label]",
	"metadata": [],
	"description": [
		{
			"@value": "[Click to edit description]",
			"@language": "en"
		}
	],
	"license": "https://creativecommons.org/licenses/by/3.0/",
	"attribution": "[Click to edit attribution]",
	"sequences": [
		{
			"@id": "http://4dd64d5e-1e99-4b87-bfcf-6d6d40e31b77",
			"@type": "sc:Sequence",
			"label": [
				{
					"@value": "Normal Sequence",
					"@language": "en"
				}
			],
			"canvases": [
				{
					"@id": "http://c3bc246f-f06c-42f7-831d-594c977e4e7c",
					"@type": "sc:Canvas",
					"label": "Title page",
					"height": 7200,
					"width": 4526,
					"images": [
						{
							"@context": "http://iiif.io/api/presentation/2/context.json",
							"@id": "http://4f78d552-0a48-4e56-a2b4-583c6b861bb5",
							"@type": "oa:Annotation",
							"motivation": "sc:painting",
							"resource": {
								"@id": "https://libimages1.princeton.edu/loris/plum_prod/pd%2F79%2F1v%2F30%2F25-intermediate_file.jp2/full/full/0/default.jpg",
								"@type": "dctypes:Image",
								"format": "image/jpeg",
								"service": {
									"@context": "http://iiif.io/api/image/2/context.json",
									"@id": "https://libimages1.princeton.edu/loris/plum_prod/pd%2F79%2F1v%2F30%2F25-intermediate_file.jp2",
									"profile": [
										"http://iiif.io/api/image/2/level2.json",
										{
											"supports": [
												"canonicalLinkHeader",
												"profileLinkHeader",
												"mirroring",
												"rotationArbitrary",
												"sizeAboveFull",
												"regionSquare"
											],
											"qualities": [
												"default",
												"bitonal",
												"gray",
												"color"
											],
											"formats": [
												"jpg",
												"png",
												"gif",
												"webp"
											]
										}
									]
								},
								"height": 7200,
								"width": 4526
							},
							"on": "http://c3bc246f-f06c-42f7-831d-594c977e4e7c"
						}
					]
				},
				{
					"@id": "http://4b71329a-be4d-40b1-8d53-e9e3c3eb773f",
					"@type": "sc:Canvas",
					"label": "Page 1",
					"height": 7200,
					"width": 4442,
					"images": [
						{
							"@context": "http://iiif.io/api/presentation/2/context.json",
							"@id": "http://79b89da6-bc26-4afe-b8a4-1c3a66f387f2",
							"@type": "oa:Annotation",
							"motivation": "sc:painting",
							"resource": {
								"@id": "https://libimages1.princeton.edu/loris/plum_prod/pm%2Fg7%2F4s%2F68%2F22-intermediate_file.jp2/full/full/0/default.jpg",
								"@type": "dctypes:Image",
								"format": "image/jpeg",
								"service": {
									"@context": "http://iiif.io/api/image/2/context.json",
									"@id": "https://libimages1.princeton.edu/loris/plum_prod/pm%2Fg7%2F4s%2F68%2F22-intermediate_file.jp2",
									"profile": [
										"http://iiif.io/api/image/2/level2.json",
										{
											"supports": [
												"canonicalLinkHeader",
												"profileLinkHeader",
												"mirroring",
												"rotationArbitrary",
												"sizeAboveFull",
												"regionSquare"
											],
											"qualities": [
												"default",
												"bitonal",
												"gray",
												"color"
											],
											"formats": [
												"jpg",
												"png",
												"gif",
												"webp"
											]
										}
									]
								},
								"height": 7200,
								"width": 4442
							},
							"on": "http://4b71329a-be4d-40b1-8d53-e9e3c3eb773f"
						}
					]
				},
				{
					"@id": "http://02c6f4ff-b36d-449e-9709-a77e0f37e0c4",
					"@type": "sc:Canvas",
					"label": "Page 2",
					"height": 7200,
					"width": 4492,
					"images": [
						{
							"@context": "http://iiif.io/api/presentation/2/context.json",
							"@id": "http://53bb73ff-26df-44e6-a5ce-2288724f159b",
							"@type": "oa:Annotation",
							"motivation": "sc:painting",
							"resource": {
								"@id": "https://libimages1.princeton.edu/loris/plum_prod/pt%2F72%2F2j%2Fw1%2F25-intermediate_file.jp2/full/full/0/default.jpg",
								"@type": "dctypes:Image",
								"format": "image/jpeg",
								"service": {
									"@context": "http://iiif.io/api/image/2/context.json",
									"@id": "https://libimages1.princeton.edu/loris/plum_prod/pt%2F72%2F2j%2Fw1%2F25-intermediate_file.jp2",
									"profile": [
										"http://iiif.io/api/image/2/level2.json",
										{
											"supports": [
												"canonicalLinkHeader",
												"profileLinkHeader",
												"mirroring",
												"rotationArbitrary",
												"sizeAboveFull",
												"regionSquare"
											],
											"qualities": [
												"default",
												"bitonal",
												"gray",
												"color"
											],
											"formats": [
												"jpg",
												"png",
												"gif",
												"webp"
											]
										}
									]
								},
								"height": 7200,
								"width": 4492
							},
							"on": "http://02c6f4ff-b36d-449e-9709-a77e0f37e0c4"
						}
					]
				}
			]
		}
	],
	"structures": []
}

export default manifest
