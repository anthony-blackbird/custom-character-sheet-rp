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
                    'code' => 'name',
                    'name' => 'Name',
                    'data' => [
                        'value' => 'John Doe',
                    ],
                ],
                'experience' => [
                    'code' => 'experience',
                    'name' => 'Experience',
                    'data' => [
                        'value' => 40000,
                    ],
                ],
                'faith' => [
                    'code' => 'faith',
                    'name' => 'Faith',
                    'data' => [
                        'value' => 'Brigitte du Nord',
                    ],
                ],
            ],
            'masteryScore' => 3,
            'abilities' => [
                'strength' => [
                    'code' => 'strength',
                    'name' => 'Strength',
                    'data' => [
                        'value' => 8,
                        'hasMastery' => false,
                    ],
                ],
                'dexterity' => [
                    'code' => 'dexterity',
                    'name' => 'Dexterity',
                    'data' => [
                        'value' => 10,
                        'hasMastery' => false,
                    ],
                ],
                'constitution' => [
                    'code' => 'constitution',
                    'name' => 'Constitution',
                    'data' => [
                        'value' => 14,
                        'hasMastery' => false,
                    ],
                ],
                'intelligence' => [
                    'code' => 'intelligence',
                    'name' => 'Intelligence',
                    'data' => [
                        'value' => 12,
                        'hasMastery' => false,
                    ],
                ],
                'wisdom' => [
                    'code' => 'wisdom',
                    'name' => 'Wisdom',
                    'data' => [
                        'value' => 16,
                        'hasMastery' => true,
                    ],
                ],
                'charisma' => [
                    'code' => 'charisma',
                    'name' => 'Charisma',
                    'data' => [
                        'value' => 16,
                        'hasMastery' => true,
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