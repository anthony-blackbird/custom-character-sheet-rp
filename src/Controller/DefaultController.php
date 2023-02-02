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
                    'value' => 'John Doe',
                ],
                'experience' => [
                    'code' => 'experience',
                    'name' => 'Experience',
                    'value' => 40000,
                ],
                'faith' => [
                    'code' => 'faith',
                    'name' => 'Faith',
                    'value' => 'Brigitte du Nord',
                ],
            ],
            'masteryScore' => 3,
            'abilities' => [
                'strength' => [
                    'code' => 'strength',
                    'name' => 'Strength',
                    'value' => 8,
                    'hasMastery' => false,
                ],
                'dexterity' => [
                    'code' => 'dexterity',
                    'name' => 'Dexterity',
                    'value' => 10,
                    'hasMastery' => false,
                ],
                'constitution' => [
                    'code' => 'constitution',
                    'name' => 'Constitution',
                    'value' => 14,
                    'hasMastery' => false,
                ],
                'intelligence' => [
                    'code' => 'intelligence',
                    'name' => 'Intelligence',
                    'value' => 12,
                    'hasMastery' => false,
                ],
                'wisdom' => [
                    'code' => 'wisdom',
                    'name' => 'Wisdom',
                    'value' => 16,
                    'hasMastery' => true,
                ],
                'charisma' => [
                    'code' => 'charisma',
                    'name' => 'Charisma',
                    'value' => 16,
                    'hasMastery' => true,
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