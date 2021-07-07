import os
import random

import rusyllab


CONSONANTS = 'бвгджзклмнпрстфхцчшщ'


def filter_key_for_first_word(word):
    return len(rusyllab.split_word(word)) == 2


def filter_key_for_second_word(word):
    startswith_consonant = word[0].lower() in CONSONANTS
    endswith_consonant = word[-1].lower() in CONSONANTS
    two_syllables = len(rusyllab.split_word(word)) == 2
    return startswith_consonant and endswith_consonant and two_syllables


class Illarinator:

    __first_words = []
    __second_words = []
    FILEPATH = os.path.join(
        os.path.abspath((os.path.dirname(__file__))), 'singular.txt'
    )

    def __init__(self):
        with open(self.FILEPATH, 'r') as file:
            data = file.read().splitlines()
            self.__first_words = list(filter(filter_key_for_first_word, data))
            self.__second_words = list(filter(filter_key_for_second_word, data))

    def generate(self):
        first = random.choices(self.__first_words, k=1)[0]
        second = random.choices(self.__second_words, k=1)[0]
        return first + second + 'ыч'
