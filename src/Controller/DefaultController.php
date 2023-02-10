<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class DefaultController extends AbstractController
{
    /**
     * @Route("/webpack-test", name="webpack-test")
     */
    public function index()
    {
        $charSheet = [
            'infos' => [
                'name' => [
                    'blockCode' => 'info',
                    'code' => 'name',
                    'name' => 'Name',
                    'inputs' => [
                        'value' => [
                            'type' => 'text',
                            'defaultValue' => 'John Doe',
                        ],
                    ],
                ],
                'experience' => [
                    'blockCode' => 'info',
                    'code' => 'experience',
                    'name' => 'Experience',
                    'inputs' => [
                        'value' => [
                            'type' => 'text',
                            'defaultValue' => 40000,
                        ],
                    ],
                ],
                'faith' => [
                    'blockCode' => 'info',
                    'code' => 'faith',
                    'name' => 'Faith',
                    'inputs' => [
                        'value' => [
                            'type' => 'text',
                            'defaultValue' => 'Brigitte du Nord',
                        ]
                    ],
                ],
            ],
            'masteryScore' => 3,
            'abilities' => [
                'strength' => [
                    'blockCode' => 'ability',
                    'code' => 'strength',
                    'name' => 'Strength',
                    'inputs' => [
                        'value' => [
                            'type' => 'text',
                            'defaultValue' => 8,
                        ],
                        'hasMastery' => [
                            'type' => 'checkbox',
                            'defaultValue' => false,
                        ],
                    ],
                ],
                'dexterity' => [
                    'blockCode' => 'ability',
                    'code' => 'dexterity',
                    'name' => 'Dexterity',
                    'inputs' => [
                        'value' => [
                            'type' => 'text',
                            'defaultValue' => 10,
                        ],
                        'hasMastery' => [
                            'type' => 'checkbox',
                            'defaultValue' => false,
                        ],
                    ],
                ],
                'constitution' => [
                    'blockCode' => 'ability',
                    'code' => 'constitution',
                    'name' => 'Constitution',
                    'inputs' => [
                        'value' => [
                            'type' => 'text',
                            'defaultValue' => 14,
                        ],
                        'hasMastery' => [
                            'type' => 'checkbox',
                            'defaultValue' => false,
                        ],
                    ],
                ],
                'intelligence' => [
                    'blockCode' => 'ability',
                    'code' => 'intelligence',
                    'name' => 'Intelligence',
                    'inputs' => [
                        'value' => [
                            'type' => 'text',
                            'defaultValue' => 12,
                        ],
                        'hasMastery' => [
                            'type' => 'checkbox',
                            'defaultValue' => false,
                        ],
                    ],
                ],
                'wisdom' => [
                    'blockCode' => 'ability',
                    'code' => 'wisdom',
                    'name' => 'Wisdom',
                    'inputs' => [
                        'value' => [
                            'type' => 'text',
                            'defaultValue' => 16,
                        ],
                        'hasMastery' => [
                            'type' => 'checkbox',
                            'defaultValue' => true,
                        ],
                    ],
                ],
                'charisma' => [
                    'blockCode' => 'ability',
                    'code' => 'charisma',
                    'name' => 'Charisma',
                    'inputs' => [
                        'value' => [
                            'type' => 'text',
                            'defaultValue' => 16,
                        ],
                        'hasMastery' => [
                            'type' => 'checkbox',
                            'defaultValue' => true,
                        ],
                    ],
                ],
            ]
        ];

        return $this->render('webpack-test.html.twig',
            [
                'char_sheet' => json_encode($charSheet)
            ]
        );
    }
}