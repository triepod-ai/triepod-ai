# LLM Instructions for Triepod.AI Development

## MANDATORY: Development Tracking

**CRITICAL REQUIREMENT**: At the end of EVERY session working on the Triepod.AI project, you MUST update the `DEVELOPMENT_TRACKING.md` file located in the project root directory.

### Tracking File Location:
```
\\wsl.localhost\Debian\home\bryan\_websites\triepod.ai\DEVELOPMENT_TRACKING.md
```

### Update Process:
1. **Before ending session**: Always update the tracking file
2. **Add new entry**: Include session number, date, and all changes
3. **Be comprehensive**: List every file created, modified, or deleted
4. **Include context**: Note important decisions and rationale
5. **Suggest next steps**: Help the next session continue smoothly

### Why This Matters:
- Maintains continuity between sessions
- Documents project evolution
- Prevents duplicate work
- Preserves strategic decisions
- Helps debug issues

## Project Guidelines

### Information Security:
- **NEVER reveal**: Specific methodology, document structure, or technical implementation details
- **ALWAYS protect**: Personal information, dates, employer names, geographic locations
- **Focus on**: Results, impact, and benefits rather than the "how"

### Strategic Positioning:
- Methodology is "proprietary" and our "competitive advantage"
- Highlight results: $16K value, 85% success rate, 48-hour turnaround
- Build intrigue without revealing secrets

### Code Quality:
- Follow TypeScript strict mode
- Use existing component patterns
- Implement proper error handling
- Test all changes with `npm run build`
- Follow ESLint rules (escape HTML entities in JSX)

### Key Project Files:
- `STRATEGIC-SUMMARY.md` - Marketing strategy
- `CLAUDE_DESKTOP_INSTRUCTIONS.md` - Technical setup
- `WEB_DESIGN_EXPERT_PROMPT.md` - Design guidelines
- `LESSONS_LEARNED.md` - Common issues and solutions

## Example Tracking Entry:

```markdown
## Session 2 - June 4, 2025

### Changes Made:
- Created pricing page at `/app/pricing/page.tsx`
- Updated navigation to include pricing link
- Added three pricing tiers (Starter, Professional, Enterprise)
- Implemented pricing comparison table component

### Context/Notes:
- Decided on freemium model with limited free tier
- Enterprise pricing kept as "Contact Us" for flexibility
- Used existing card components for consistency

### Next Steps:
- Implement Stripe payment integration
- Create user dashboard for subscription management
- Add FAQ section to pricing page
```

## Remember:
Your work contributes to a larger mission of democratizing access to justice. Every line of code, every design decision, and every piece of content should reflect that mission while protecting the proprietary methods that make it possible.