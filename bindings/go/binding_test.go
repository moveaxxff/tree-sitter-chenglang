package tree_sitter_chenglang_test

import (
	"testing"

	tree_sitter "github.com/tree-sitter/go-tree-sitter"
	tree_sitter_chenglang "github.com/tree-sitter/tree-sitter-chenglang/bindings/go"
)

func TestCanLoadGrammar(t *testing.T) {
	language := tree_sitter.NewLanguage(tree_sitter_chenglang.Language())
	if language == nil {
		t.Errorf("Error loading Chenglang grammar")
	}
}
