from unittest import TestCase

import tree_sitter
import tree_sitter_chenglang


class TestLanguage(TestCase):
    def test_can_load_grammar(self):
        try:
            tree_sitter.Language(tree_sitter_chenglang.language())
        except Exception:
            self.fail("Error loading Chenglang grammar")
