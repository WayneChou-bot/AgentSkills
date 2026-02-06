const fs = require('fs');
const { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, HeadingLevel, AlignmentType, WidthType, BorderStyle, ShadingType, VerticalAlign, LevelFormat } = require('docx');

// Define styles
const styles = {
    default: {
        document: {
            run: {
                font: "Arial",
                size: 24, // 12pt
                color: "000000"
            }
        }
    },
    paragraphStyles: [
        {
            id: "Normal",
            name: "Normal",
            run: { font: "Arial", size: 24, color: "000000" },
            paragraph: { spacing: { line: 360, before: 120, after: 120 } } // 1.5 line spacing
        },
        {
            id: "Heading1",
            name: "Heading 1",
            run: { font: "Arial", size: 36, bold: true, color: "2E74B5" }, // 18pt, Blue
            paragraph: { spacing: { before: 480, after: 240 }, keepNext: true }
        },
        {
            id: "Heading2",
            name: "Heading 2",
            run: { font: "Arial", size: 28, bold: true, color: "2E74B5" }, // 14pt, Blue
            paragraph: { spacing: { before: 360, after: 180 }, keepNext: true }
        },
        {
            id: "Quote",
            name: "Quote",
            run: { font: "Arial", size: 24, italics: true, color: "555555" },
            paragraph: {
                indent: { left: 720 },
                spacing: { before: 240, after: 240 },
                border: { left: { color: "CCCCCC", space: 240, style: BorderStyle.SINGLE, size: 12 } }
            }
        }
    ]
};

// Helper for table borders
const tableBorder = { style: BorderStyle.SINGLE, size: 4, color: "AAAAAA" };
const cellBorders = { top: tableBorder, bottom: tableBorder, left: tableBorder, right: tableBorder };

// Architecture Diagram Description
const archDiagramText = new Paragraph({
    text: "[架構圖說明：建議採用分級網段管理。OA/RD網段透過 Proxy 連接雲端 AI；Fab產線網段實體隔離，僅連接地端 Local LLM。]",
    style: "Quote"
});

// Risk Assessment Table
const riskTable = new Table({
    columnWidths: [2000, 1500, 3000, 3500],
    width: { size: 10000, type: WidthType.DXA },
    rows: [
        // Header
        new TableRow({
            tableHeader: true,
            children: ["風險項目", "風險等級", "說明", "緩解措施"].map(text =>
                new TableCell({
                    width: { size: 2500, type: WidthType.DXA },
                    shading: { fill: "D9E2F3", type: ShadingType.CLEAR },
                    verticalAlign: VerticalAlign.CENTER,
                    borders: cellBorders,
                    children: [new Paragraph({ children: [new TextRun({ text, bold: true })], alignment: AlignmentType.CENTER })]
                })
            )
        }),
        // Rows
        ...[
            ["代碼洩漏", "🔴 高", "核心製程代碼上傳至雲端模型", "1. 簽署 No-Training Policy 企業合約。\n2. 設定 .gitignore 與敏感字詞過濾。"],
            ["機台誤操作", "🔴 高", "AI 生成錯誤指令導致產線停機", "1. 產線環境僅限唯讀查詢。\n2. 實施 Human-in-the-loop 確認機制。"],
            ["IP 侵權", "🟡 中", "AI 生成的代碼侵犯他人專利", "1. 採用提供 IP Indemnity 的供應商。\n2. 規範僅使用內部核可 Library。"]
        ].map(row =>
            new TableRow({
                children: row.map(text =>
                    new TableCell({
                        width: { size: 2500, type: WidthType.DXA },
                        borders: cellBorders,
                        verticalAlign: VerticalAlign.CENTER,
                        children: text.split('\n').map(line => new Paragraph({ text: line }))
                    })
                )
            })
        )
    ]
});

// Create Document
const doc = new Document({
    styles: styles,
    numbering: {
        config: [
            {
                reference: "bullet-list",
                levels: [
                    { level: 0, format: LevelFormat.BULLET, text: "•", alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 720, hanging: 360 } } } }
                ]
            }
        ]
    },
    sections: [{
        children: [
            // Title
            new Paragraph({
                text: "AI Copilot & Agent Skills 導入評估報告",
                heading: HeadingLevel.TITLE,
                alignment: AlignmentType.CENTER
            }),
            new Paragraph({
                text: "針對半導體/高科技製造場域 (Semiconductor Fab/OSAT)",
                heading: HeadingLevel.HEADING_2,
                alignment: AlignmentType.CENTER
            }),
            new Paragraph({ text: "" }), // Spacer

            // Abstract
            new Paragraph({
                style: "Quote",
                children: [
                    new TextRun({ text: "摘要：", bold: true }),
                    new TextRun("本報告旨在評估於高資安管制的半導體產線環境中，導入 AI 輔助開發工具 (AI Copilot/Antigravity) 及自動化技能模組 (Agent Skills) 之可行性、資安風險與預期效益。")
                ]
            }),
            new Paragraph({ text: "" }),

            // Section 1
            new Paragraph({ text: "1. 執行架構建議 (Architecture Proposal)", heading: HeadingLevel.HEADING_1 }),
            new Paragraph({ text: "考量半導體產業對 IP 與產線穩定性的極高要求，建議採用分級網段管理策略。" }),
            new Paragraph({ text: "" }),
            archDiagramText, // Placeholder for mermaid
            new Paragraph({ text: "" }),
            new Paragraph({ text: "架構說明：", bold: true }),
            new Paragraph({ text: "OA/RD 網段 (綠區)：允許有限度連網。透過 Secure Proxy 連接雲端 AI 服務 (如 Antigravity 企業版)。Agent Skills 在此區域發揮最大效益。", numbering: { reference: "bullet-list", level: 0 } }),
            new Paragraph({ text: "Fab/產線網段 (紅區)：實體隔離 (Air-gapped)。嚴禁直接連接雲端 AI。若有 AI 需求，需架設 Local LLM (地端模型)，資料完全不出內網。", numbering: { reference: "bullet-list", level: 0 } }),
            new Paragraph({ text: "" }),

            // Section 2
            new Paragraph({ text: "2. 資安風險評估與緩解 (Security Risk Assessment)", heading: HeadingLevel.HEADING_1 }),
            riskTable,
            new Paragraph({ text: "" }),

            // Section 3
            new Paragraph({ text: "3. Agent Skill 的核心價值 (Value Proposition)", heading: HeadingLevel.HEADING_1 }),
            new Paragraph({ text: "Agent Skill 並非單純的 AI 聊天，而是將公司內部的 SOP (標準作業程序) 封裝成 AI 可執行的工具包。" }),
            new Paragraph({ text: "" }),

            // Benefits Table
            new Table({
                columnWidths: [2000, 2500, 5500],
                width: { size: 10000, type: WidthType.DXA },
                rows: [
                    new TableRow({
                        tableHeader: true,
                        children: ["效益層面", "關鍵字", "說明"].map(text =>
                            new TableCell({
                                width: { size: 3333, type: WidthType.DXA },
                                shading: { fill: "D9E2F3", type: ShadingType.CLEAR },
                                verticalAlign: VerticalAlign.CENTER,
                                borders: cellBorders,
                                children: [new Paragraph({ children: [new TextRun({ text, bold: true })], alignment: AlignmentType.CENTER })]
                            })
                        )
                    }),
                    ...[
                        ["成本", "Token Savings", "減少重複輸入背景資料，省錢又省頻寬。"],
                        ["品質", "Consistency", "確保全公司輸出的代碼/文件風格統一，不因人而異。"],
                        ["人力", "Empowerment", "讓資淺員工也能透過 Skill，瞬間擁有資深專家的 AI 操控力。"],
                        ["風險", "Compliance", "透過 Skill 預設的限制，防止 AI 產生不合規或有風險的內容。"]
                    ].map(row =>
                        new TableRow({
                            children: row.map((text, i) =>
                                new TableCell({
                                    width: { size: 3333, type: WidthType.DXA },
                                    borders: cellBorders,
                                    verticalAlign: VerticalAlign.CENTER,
                                    children: [new Paragraph({
                                        children: [new TextRun({ text, bold: i === 1 })], // Bold the keyword
                                        alignment: i === 0 ? AlignmentType.CENTER : AlignmentType.LEFT
                                    })]
                                })
                            )
                        })
                    )
                ]
            }),
            new Paragraph({ text: "" }),

            new Paragraph({ text: "效益分析：", bold: true }),
            new Paragraph({ text: "知識傳承 (Knowledge Management)：將維修手冊與歷史 Log 製作成 Skill。新人只需問：「Error 503 排解」，AI 自動撈出標準流程。", numbering: { reference: "bullet-list", level: 0 } }),
            new Paragraph({ text: "標準化與合規 (Standardization)：透過 Agent Skill 生成代碼，強制套用公司的 Coding Style 與資安規範。", numbering: { reference: "bullet-list", level: 0 } }),
            new Paragraph({ text: "提升效率 (Efficiency)：自動化指令 (如 @docx 生成報告)，減少 30%-50% 的文書時間。", numbering: { reference: "bullet-list", level: 0 } }),
            new Paragraph({ text: "" }),

            // Section 4
            new Paragraph({ text: "4. 導入時程建議 (Roadmap)", heading: HeadingLevel.HEADING_1 }),
            new Paragraph({ text: "Phase 1: PoC (概念驗證) - [1-2 個月]", bold: true }),
            new Paragraph({ text: "範圍：RD 部門，選定 10 位種子用戶。目標：導入 Antigravity/Copilot，測試 Agent Skill 對於非機密專案的效率提升。", indent: { left: 720 } }),
            new Paragraph({ text: "Phase 2: Pilot (試行) - [3-6 個月]", bold: true }),
            new Paragraph({ text: "範圍：擴大至 OA 網段，設定 Proxy 白名單。重點：建立資安審計 Log，確認資料流向安全。", indent: { left: 720 } }),
            new Paragraph({ text: "Phase 3: Production (正式上線) - [6個月+]", bold: true }),
            new Paragraph({ text: "範圍：全公司 (不含產線機台)。產線特別方案：評估導入地端模型，將驗證過的 Agent Skills 遷移至地端環境。", indent: { left: 720 } }),
            new Paragraph({ text: "" }),

            // Conclusion
            new Paragraph({
                children: [
                    new TextRun({ text: "結論：", bold: true }),
                    new TextRun("在適當的資安架構 (Proxy/Local LLM) 與政策管控下，導入 AI Copilot 與 Agent Skills 能顯著提升半導體產業的軟體工程效率與知識管理能力，是邁向智慧製造 (Smart Manufacturing) 的關鍵一步。")
                ],
                style: "Quote"
            }),
            new Paragraph({ text: "" }),
            new Paragraph({ text: "報告人：Wayne Chou / Antigravity Assistant", alignment: AlignmentType.RIGHT }),
            new Paragraph({ text: "日期：2026/02/06", alignment: AlignmentType.RIGHT })
        ]
    }]
});

// Save Document
Packer.toBuffer(doc).then((buffer) => {
    fs.writeFileSync("AI_Adoption_Proposal.docx", buffer);
    console.log("Document generated successfully");
});
