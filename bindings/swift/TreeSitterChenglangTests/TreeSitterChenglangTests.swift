import XCTest
import SwiftTreeSitter
import TreeSitterChenglang

final class TreeSitterChenglangTests: XCTestCase {
    func testCanLoadGrammar() throws {
        let parser = Parser()
        let language = Language(language: tree_sitter_chenglang())
        XCTAssertNoThrow(try parser.setLanguage(language),
                         "Error loading Chenglang grammar")
    }
}
